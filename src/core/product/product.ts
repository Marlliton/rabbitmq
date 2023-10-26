import { logger } from "../../../util/log";
import { RabbitMQConsts } from "../../constants/rabbitmq-consts";
import { ProducerRepository } from "../repositories/producer/producer-repository";

export class Product {
  private exchangeName = RabbitMQConsts.exchangeName;
  private routeKey = RabbitMQConsts.routeConfirmedPurchaseKey
  
  constructor(private producer: ProducerRepository) {}

  async compraConfirmada() {
    await this.producer.publishInExchange({
      exchangeName: this.exchangeName,
      payload: JSON.stringify({
        name: "Iphone",
        price: "5000",
        status: "paid",
        customer: {
          name: "Marlliton",
          email: "marlliton@kmail.com"
        }
      }),
      routeKey: this.routeKey,
    });

    logger.warn("Enviando mensagem de confirmação")
  }
}
