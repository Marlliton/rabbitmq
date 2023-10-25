import { logger } from "../../../util/log";
import { ConsumerRepository } from "./ConsumerRepository";

export class Consumer {
  constructor(private server: ConsumerRepository) {}

  public async consume(exchangeName: string, queueName: string, routeKey: string) {
    await this.server.consume(exchangeName, queueName, routeKey, (message: any) => {
      logger.info(`Mensagem recebida pela fila: ${queueName} ${message.content.toString()}`)
    })
  }
}