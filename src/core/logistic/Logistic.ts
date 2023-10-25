import { logger } from "../../../util/log";

export class Logistic {
  separationProduct(dados: any) {
    logger.info(`
      ------------- Logistic --------------
      Produto ${dados.name} em separação.
    `)
  }
}