import { Consumer } from "./core/consumer";
import { Producer } from "./core/producer";
import { RabbitMQServer } from "./rabbitmq-server/RabbitMQServer";

const urlConnection = "amqp://docker:docker@localhost:5672";
const queue = "fila-teste"

const producer = new Producer(new RabbitMQServer(urlConnection));

let count = 0
setInterval(() => {
  count += 1
  const payload = {
    assunto: "teste" + count,
  };
  producer.sendMessage(queue, JSON.stringify(payload));
}, 600);
