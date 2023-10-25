import { ProducerParams, ProducerRepository } from "../core/repositories/producer/producer-repository";
import { RabbitMQ } from "./rabbit-m-q";

export class Publisher extends RabbitMQ implements ProducerRepository {
  constructor(protected url: string) {
    super(url)
  }

  public async publishInExchange({exchangeName, payload, routeKey}: ProducerParams) {
    if (!this.connection) {
      await this.start();
    }

    await this.channel.assertExchange(exchangeName, 'direct', {durable: true})
    return this.channel.publish(exchangeName, routeKey, Buffer.from(payload));
  }
}
