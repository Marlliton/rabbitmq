import { ConsumeMessage } from "amqplib";

type CallbackParam = (message: ConsumeMessage | null) => Promise<boolean>;

export type ConsumerParams = {
  exchangeName: string;
  queueName: string;
  routeKey: string;
  callback: CallbackParam;
};

export interface ConsumerRepository {
  consume(params: ConsumerParams): Promise<any>;
}
