import { logger } from "../../../util/log";
import { ConsumerRepository } from "../repositories/consumer/ConsumerRepository";

export class Email {
  constructor() {}

  async send(dados: any) {
    logger.info(`
        \n------------------- Email ------------------
        ${dados.customer.name} sua compra foi aprovada \n
        Email informado: ${dados.customer.email}
      `);
  }
}
