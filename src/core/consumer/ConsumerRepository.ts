import { ConsumeMessage } from "amqplib";

export interface ConsumerRepository {
  consume(queueName: string, callback: (message: ConsumeMessage | null) => void): Promise<any>
}