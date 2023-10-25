import { logger } from "../../../util/log";
import { ConsumerRepository } from "../repositories/consumer/ConsumerRepository";

export class Notification {
  constructor(private consumer: ConsumerRepository) {}

  async notify(exchangeName: string, queue: string, routeKey: string) {
    await this.consumer.consume(exchangeName, queue, routeKey, (msg) => {
      if(!msg) return
      const payload = JSON.parse(msg?.content.toString())
      logger.warn(`
        ${payload.customer.name} notificando... \n
        COMPRA APROVADA
      `)
    })
  }
}