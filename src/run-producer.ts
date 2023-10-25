import { Produto } from "./core/produto/produto";
import { Publisher } from "./rabbitmq/publisher";

const urlConnection = "amqp://docker:docker@localhost:5672";

const produto = new Produto(new Publisher(urlConnection));

// setInterval(() => {
//   produto.compraConfirmada();
// }, 600);

produto.compraConfirmada();