import { logger } from "../../../util/log";

export class ConfirmSeparation {
  async confirm(dados: any) {
    logger.info(`
      ----------------Confirm Separation -------------------
      Separação do Produto: ${dados.name} => ${dados.summary} 
    `);

    return !Object.keys(dados).length ? false : true;
  }
}
