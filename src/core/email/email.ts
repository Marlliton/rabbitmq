import { logger } from "../../../util/log";
import { ConsumerRepository } from "../repositories/consumer/consumer-repository";

export class Email {
  constructor() {}

  async send(dados: any) {
    logger.info(`
    \n------------------- Email ------------------
    ${dados.customer.name} sua compra foi aprovada
    Email informado: ${dados.customer.email}
    `);
    
    return !Object.keys(dados).length ? false : true;
  }
}
