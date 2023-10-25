import { logger } from "../../../util/log";
import { ConsumerRepository } from "../repositories/consumer/ConsumerRepository";

export class Email {
  constructor(private consumer: ConsumerRepository) {}

  async send(exchangeName: string, queue: string, routeKey: string) {
    await this.consumer.consume(exchangeName, queue, routeKey, (msg) => {
      if(!msg) return
      const payload = JSON.parse(msg?.content.toString())
      logger.info(`
        ${payload.customer.name} sua compra foi aprovada \n
        Email informado: ${payload.customer.email}
      `)
    })
  }
}