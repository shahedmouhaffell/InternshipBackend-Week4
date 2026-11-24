type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

// 1. Pick: Select specific properties
type UserInfo = Pick<User, "name" | "email">;
type ProductInfo = Pick<Product, "title" | "price">;

// 2. Omit: Remove specific properties
type PublicUser = Omit<User, "email">;
type ProductWithoutQuantity = Omit<Product, "quantity">;

// 3. Partial: Make all properties optional
type UpdateUser = Partial<User>;
type UpdateProduct = Partial<Product>;

// 4. Record: Define keys and their value types
type UserRole = "admin" | "user" | "editor";

type RolePermissions = Record<UserRole, boolean>;

// Examples

const userInfo: UserInfo = {
  name: "Shahed",
  email: "shahed@example.com",
};

const productInfo: ProductInfo = {
  title: "Laptop",
  price: 1000,
};

const publicUser: PublicUser = {
  id: 1,
  name: "Shahed",
};

const productWithoutQuantity: ProductWithoutQuantity = {
  id: 101,
  title: "Laptop",
  price: 1000,
};

const updateUser: UpdateUser = {
  name: "Shahed New",
};

const updateProduct: UpdateProduct = {
  price: 900,
};

const permissions: RolePermissions = {
  admin: true,
  user: false,
  editor: true,
};

console.log(userInfo);
console.log(productInfo);
console.log(publicUser);
console.log(productWithoutQuantity);
console.log(updateUser);
console.log(updateProduct);
console.log(permissions);
