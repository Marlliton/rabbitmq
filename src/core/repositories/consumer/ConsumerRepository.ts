import { ConsumeMessage } from "amqplib";

type CallbackParam = (message: ConsumeMessage | null) => void;

export type ConsumerParams = {
  exchangeName: string;
  queueName: string;
  routeKey: string;
  callback: CallbackParam;
};

export interface ConsumerRepository {
  consume(params: ConsumerParams): Promise<any>;
}
