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

// Get a property from an object using keyof
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

// Example objects
const user: User = {
  id: 1,
  name: "Shahed",
  email: "shahed@example.com",
};

const product: Product = {
  id: 101,
  title: "Laptop",
  price: 1000,
  quantity: 5,
};

// Test getProperty
console.log(getProperty(user, "name"));
console.log(getProperty(user, "email"));

console.log(getProperty(product, "title"));
console.log(getProperty(product, "price"));
console.log(getProperty(product, "quantity"));

// This will cause a TypeScript error:
// console.log(getProperty(product, "email"));
export { getProperty };