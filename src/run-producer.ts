import { Product } from "./core/product/product";
import { Publisher } from "./rabbitmq/publisher";

const urlConnection = "amqp://docker:docker@localhost:5672";

const product = new Product(new Publisher(urlConnection));

setInterval(() => {
  product.compraConfirmada();
}, 600);

// produto.compraConfirmada();