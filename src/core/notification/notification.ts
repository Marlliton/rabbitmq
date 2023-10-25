import { logger } from "../../../util/log";
import { ConsumerRepository } from "../repositories/consumer/consumer-repository";

export class Notification {
  constructor() {}

  async notify(dados: any) {
    logger.info(`
        \n------------ WhatsApp ------------ \n
        COMPRA DE ${dados.name} APROVADA
      `);
  }
}
