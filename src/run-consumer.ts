import { Email } from "./core/email/Email";
import { Notification } from "./core/notification/Notification";
import { Consumer as ConsumerRabbit } from "./rabbitmq/Consumer";

const urlConnection = "amqp://docker:docker@localhost:5672";
const queue = "fila-teste"
const exchangeName = "exchange-teste"
const routeKey = "route-teste"

const email = new Email(new ConsumerRabbit(urlConnection))
const notification = new Notification(new ConsumerRabbit(urlConnection))

email.send(exchangeName, queue, routeKey)
notification.notify(exchangeName, queue, routeKey)