import { Consumer } from "./core/consumer/Consumer";
import { Consumer as ConsumerRabbit } from "./rabbitmq/Consumer";

const urlConnection = "amqp://docker:docker@localhost:5672";
const queue = "fila-teste"
const exchangeName = "exchange-teste"
const routeKey = "route-teste"

const consumer = new Consumer(new ConsumerRabbit(urlConnection))

consumer.consume(exchangeName, queue, routeKey)