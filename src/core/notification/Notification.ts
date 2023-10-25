import { logger } from "../../../util/log";
import { ConsumerRepository } from "../repositories/consumer/ConsumerRepository";

export class Notification {
  constructor() {}

  async notify(dados: any) {
    logger.info(`
        \n------------ WhatsApp ------------ \n
        COMPRA DE ${dados.name} APROVADA
      `);
  }
}
