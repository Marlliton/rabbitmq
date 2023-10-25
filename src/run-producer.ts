import { Producer } from "./core/producer/Producer";
import { Publisher } from "./rabbitmq/Publisher";

const urlConnection = "amqp://docker:docker@localhost:5672";
const exchangeName = "exchange-teste"
const routeKey = "route-teste"

const producer = new Producer(new Publisher(urlConnection));

let count = 0
setInterval(() => {
  count += 1
  const payload = {
    assunto: `Mensagem teste n° ${count}`,
  };
  producer.sendMessage(exchangeName, routeKey, JSON.stringify(payload));
}, 600);
