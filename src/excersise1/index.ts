import {
  inventory,
  addItem,
  removeItem,
  updateQuantity,
  findBySku,
  lowStock,
  inventoryValue,
} from "./excersise1.js";

addItem({
  sku: "P101",
  name: "Laptop",
  price: 1000,
  quantity: 5,
});

addItem({
  sku: "P102",
  name: "Mouse",
  price: 25,
  quantity: 2,
});

console.log(inventory.size);
console.log(removeItem("P999"));

updateQuantity("P101", 10);

console.log(findBySku("P101"));
console.log(lowStock(5));
console.log(inventoryValue());
