import { logger } from "../../../util/log";
import { ProducerRepository } from "../repositories/producer/ProducerRepository";

export class Produto {
  private exchangeName = "exchange-teste";
  private routeKey = "route-teste";
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
