import type { User, Product, Order } from "./excersise2.js";

const user: User = {
  id: 1,
  name: "Shahed",
  email: "shahed@example.com",
};

const product: Product = {
  id: 1,
  title: "laptop",
  quantity: 3,
};

const order: Order = {
  id: 1,
  userId: 1,
  products: [product],
  totalPrice: 4,
  status: "shipped",
};
console.log(user);
console.log(product);
console.log(order);