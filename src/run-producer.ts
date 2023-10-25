import { Produto } from "./core/produto/Produto";
import { Publisher } from "./rabbitmq/Publisher";

const urlConnection = "amqp://docker:docker@localhost:5672";

const produto = new Produto(new Publisher(urlConnection));

// setInterval(() => {
//   produto.compraConfirmada();
// }, 600);

produto.compraConfirmada();