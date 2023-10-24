import { Channel, Connection, ConsumeMessage, Message, connect } from "amqplib";
import { ProducerRepository } from "../core/producer/ProducerRepository";
import { ConsumerRepository } from "../core/consumer/ConsumerRepository";

export class RabbitMQServer implements ProducerRepository, ConsumerRepository {
  private connection: Connection;
  private channel: Channel;

  constructor(private url: string) {}

  public async start() {
    this.connection = await connect(this.url);
    this.channel = await this.connection.createChannel();
  }

  public async publishOnQueue(queueName: string, payload: string) {
    if (!this.connection) {
      await this.start();
    }
    return this.channel.sendToQueue(queueName, Buffer.from(payload));
  }

  public async consume(
    queueName: string,
    callback: (message: ConsumeMessage | null) => void
  ): Promise<any> {
    if (!this.connection) {
      await this.start();
    }

    return this.channel.consume(queueName, message => {
      callback(message);
      if (!message) return 
      this.channel.ack(message);
      console.log("ack")
    });
  }
}
