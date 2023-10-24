import { Consumer } from "./core/consumer";
import { RabbitMQServer } from "./rabbitmq-server/RabbitMQServer";

const urlConnection = "amqp://docker:docker@localhost:5672";
const queue = "fila-teste"

const consumer = new Consumer(new RabbitMQServer(urlConnection))


consumer.consume(queue)