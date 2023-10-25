import { ConsumeMessage } from "amqplib";
import { logger } from "../../util/log";
import {
  ConsumerRepository,
  ConsumerParams,
} from "../core/repositories/consumer/ConsumerRepository";
import { RabbitMQ } from "./RabbitMQ";

export class Consumer extends RabbitMQ implements ConsumerRepository {
  constructor(protected url: string) {
    super(url);
  }

  public async consume({ callback, exchangeName, queueName, routeKey }: ConsumerParams): Promise<any> {
    if (!this.connection) {
      await this.start();
    }

    await this.channel.assertQueue(queueName, { durable: true });
    await this.channel.bindQueue(queueName, exchangeName, routeKey);
    logger.warn("Esperando por mensagens");

    return await this.channel.consume(queueName, (message) => {
      if (!message) return;
      const content = JSON.parse(message?.content.toString())
      callback(content);

      this.channel.ack(message);
    });
  }
}
