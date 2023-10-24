export interface ProducerRepository {
  publishOnQueue(queueName: string, payload: string): Promise<boolean>
}