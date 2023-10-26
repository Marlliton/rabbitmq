import { logger } from "../../../util/log";
import { RabbitMQConsts } from "../../constants/rabbitmq-consts";
import { ProducerRepository } from "../repositories/producer/producer-repository";

export class Logistic {
  private exchangeName = RabbitMQConsts.exchangeName;
  private routeKey = RabbitMQConsts.routeConfirmedSeparationLogisticKey;
  constructor(private producer: ProducerRepository) {}

  async separationProduct(dados: any) {
    logger.info(`
      ------------- Logistic --------------
      Produto ${dados.name} em separação.
    `);

    await this.producer.publishInExchange({
      exchangeName: this.exchangeName,
      routeKey: this.routeKey,
      payload: JSON.stringify({
        summary: `Separação do produto: ${dados.name}`,
        ...dados,
      }),
    });

    return !Object.keys(dados).length ? false : true;
  }
}
