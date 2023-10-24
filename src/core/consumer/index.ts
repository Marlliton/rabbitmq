import { ConsumerRepository } from "./ConsumerRepository";

export class Consumer {
  constructor(private server: ConsumerRepository) {}

  public async consume(queueName: string) {
    await this.server.consume(queueName, (message: any) => {
      console.log(message.content.toString())
    })
  }
}