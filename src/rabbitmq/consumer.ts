import { ConsumeMessage } from "amqplib";
import { logger } from "../../util/log";
import {
  ConsumerRepository,
  ConsumerParams,
} from "../core/repositories/consumer/consumer-repository";
import { RabbitMQ } from "./rabbit-m-q";

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

    return await this.channel.consume(queueName, async (message) => {
      if (!message) return;
      const content = JSON.parse(message?.content.toString())
      const success = await callback(content);

      if(success) {
        return this.channel.ack(message);
      }

      return this.channel.nack(message)
    });
  }
}
