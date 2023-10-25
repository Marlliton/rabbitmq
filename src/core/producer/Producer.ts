import { logger } from "../../../util/log";
import { ProducerRepository } from "./ProducerRepository";

export class Producer {
  constructor(private server: ProducerRepository) {}

  public async sendMessage(exchangeName: string, routeKey: string, payload: string) {
    await this.server.publishInExchange({exchangeName, routeKey, payload})
    logger.warn(`Enviando mensagem: ${payload}`)
  }
}