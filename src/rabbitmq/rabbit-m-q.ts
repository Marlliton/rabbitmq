import { Channel, Connection, connect } from "amqplib";

export abstract class RabbitMQ {
  protected connection: Connection;
  protected channel: Channel;

  constructor(protected readonly url: string) {}

  protected async start() {
    this.connection = await connect(this.url);
    this.channel = await this.connection.createChannel();
  }
}