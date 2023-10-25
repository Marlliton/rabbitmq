import { Produto } from "./core/produto/Produto";
import { Publisher } from "./rabbitmq/Publisher";

const urlConnection = "amqp://docker:docker@localhost:5672";
const exchangeName = "exchange-teste";
const routeKey = "route-teste";

const producer = new Produto(new Publisher(urlConnection));

setInterval(() => {
  producer.compraConfirmada();
}, 600);
