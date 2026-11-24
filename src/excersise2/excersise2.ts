type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  title: string;
  quantity: number;
};

type Order = {
  id: number;
  userId: number;
  products: Product[];
  totalPrice: number;
  status: OrderStatus;
};

type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";
export type { User, Product, Order, OrderStatus };
