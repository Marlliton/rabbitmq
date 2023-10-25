import { ConsumeMessage } from "amqplib";

export interface ConsumerRepository {
  consume(
    exchangeName: string,
    queueName: string,
    routeKey: string,
    callback: (message: ConsumeMessage | null) => void
  ): Promise<any>;
}
