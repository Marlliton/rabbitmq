export type ProducerParams = {
  exchangeName: string
  routeKey: string
  payload: string
}

export interface ProducerRepository {
  publishInExchange(params: ProducerParams): Promise<boolean>
}