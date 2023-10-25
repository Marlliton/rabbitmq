import { ConsumeMessage } from "amqplib";
import { logger } from "../../util/log";
import { ConsumerRepository } from "../core/consumer/ConsumerRepository";
import { RabbitMQ } from "./RabbitMQ";

export class Consumer extends RabbitMQ implements ConsumerRepository{
  constructor(protected url: string) {
    super(url)
  }

  public async consume(
    exchangeName: string,
    queueName: string,
    routeKey: string,
    callback: (message: ConsumeMessage | null) => void
  ): Promise<any> {

    if (!this.connection) {
      await this.start();
    }

    // await this.channel.assertExchange(exchangeName, 'direct', {durable: true})
    await this.channel.assertQueue(queueName, {durable: true})
    await this.channel.bindQueue(queueName, exchangeName, routeKey)
    logger.warn("Esperando por mensagens")

    return this.channel.consume(queueName, message => {
      callback(message);
      if (!message) return 
      this.channel.ack(message);
    });
  }
}