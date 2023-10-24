import { ProducerRepository } from "./ProducerRepository";

export class Producer {
  constructor(private server: ProducerRepository) {}

  public async sendMessage(queueName: string, message: string) {
    await this.server.publishOnQueue(queueName, message)
    console.log("Mensagem enviada", message)
  }
}