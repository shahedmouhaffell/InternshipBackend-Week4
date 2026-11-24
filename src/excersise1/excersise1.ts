
type Product = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

const inventory = new Map<string, Product>();

// addItem
function addItem(item: Product): void {
  if (inventory.has(item.sku)) {
    return;
  }

  inventory.set(item.sku, item);
}

// removeItem
function removeItem(sku: string): boolean {
  return inventory.delete(sku);
}

// updateQuantity
function updateQuantity(
  sku: string,
  newQuantity: number
): void {
  const product = inventory.get(sku);

  if (!product) {
    return;
  }

  inventory.set(sku, {
    ...product,
    quantity: newQuantity,
  });
}

// findBySku
function findBySku(sku: string): Product | undefined {
  return inventory.get(sku);
}

// lowStock
function lowStock(threshold: number): Product[] {
  const products = [...inventory.values()];

  return products.filter((product) => {
    return product.quantity < threshold;
  });
}

// inventoryValue
function inventoryValue(): number {
  const products = [...inventory.values()];

  return products.reduce((total, product) => {
    total += product.quantity * product.price;
    return total;
  }, 0);
}

export type{Product}
export {
  inventory,
  addItem,
  removeItem,
  updateQuantity,
  findBySku,
  lowStock,
  inventoryValue,
};
