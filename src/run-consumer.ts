import { Email } from "./core/email/Email";
import { Logistic } from "./core/logistic/Logistic";
import { Notification } from "./core/notification/Notification";
import { Consumer } from "./rabbitmq/Consumer";

const urlConnection = "amqp://docker:docker@localhost:5672";
const params = {
  exchangeName: "exchange-teste",
  routeKey: "compra-confirmada",
}

const consumer = new Consumer(urlConnection);
const email = new Email();
const notification = new Notification();
const logistic = new Logistic();

consumer.consume({ ...params, queueName: "email-send", callback: email.send });
consumer.consume({ ...params, queueName: "notification-send", callback: notification.notify });
consumer.consume({ ...params, queueName: "separation-logistic", callback: logistic.separationProduct });
