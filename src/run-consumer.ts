import { RabbitMQConsts } from "./constants/rabbitmq-consts";
import { ConfirmSeparation } from "./core/confirm-separation/confirm-separation";
import { Email } from "./core/email/email";
import { Logistic } from "./core/logistic/logistic";
import { Notification } from "./core/notification/notification";
import { Consumer } from "./rabbitmq/consumer";
import { Publisher } from "./rabbitmq/publisher";

const urlConnection = "amqp://docker:docker@localhost:5672";

const consumer = new Consumer(urlConnection);
const email = new Email();
const notification = new Notification();
const confimSeparation = new ConfirmSeparation()

const logistic = new Logistic(new Publisher(urlConnection));

consumer.consume({
  exchangeName: RabbitMQConsts.exchangeName,
  routeKey: RabbitMQConsts.routeConfirmedPurchaseKey,
  queueName: "email-send",
  callback: email.send,
});
consumer.consume({
  exchangeName: RabbitMQConsts.exchangeName,
  routeKey: RabbitMQConsts.routeConfirmedPurchaseKey,
  queueName: "notification-send",
  callback: notification.notify,
});
consumer.consume({
  exchangeName: RabbitMQConsts.exchangeName,
  routeKey: RabbitMQConsts.routeConfirmedPurchaseKey,
  queueName: "separation-logistic",
  callback: logistic.separationProduct.bind(logistic),
});
consumer.consume({
  exchangeName: RabbitMQConsts.exchangeName,
  routeKey: RabbitMQConsts.routeConfirmedSeparationLogisticKey,
  queueName: "confirm-separation",
  callback: confimSeparation.confirm,
});
