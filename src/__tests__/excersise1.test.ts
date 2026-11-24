import { describe, test, expect, beforeEach } from "@jest/globals";

import {
  inventory,
  addItem,
  removeItem,
  updateQuantity,
  findBySku,
  lowStock,
  inventoryValue,
} from "../excersise1/excersise1.js";

describe("Inventory", () => {
  beforeEach(() => {
    inventory.clear();
  });

  // addItem
  describe("addItem", () => {
    test("should add a product to inventory", () => {
      const product = {
        sku: "P101",
        name: "Laptop",
        price: 1000,
        quantity: 5,
      };

      addItem(product);

      expect(inventory.has("P101")).toBe(true);
    });

    test("should not add a duplicate product", () => {
      const product = {
        sku: "P101",
        name: "Laptop",
        price: 1000,
        quantity: 5,
      };

      addItem(product);
      addItem({ ...product, quantity: 10 });

      expect(inventory.size).toBe(1);
      expect(findBySku("P101")?.quantity).toBe(5);
    });
  });

  // removeItem
  describe("removeItem", () => {
    test("should remove an existing product", () => {
      addItem({
        sku: "P101",
        name: "Laptop",
        price: 1000,
        quantity: 5,
      });

      const result = removeItem("P101");

      expect(result).toBe(true);
      expect(inventory.has("P101")).toBe(false);
    });

    test("should return false if product does not exist", () => {
      const result = removeItem("P999");

      expect(result).toBe(false);
    });
  });

  // updateQuantity
  describe("updateQuantity", () => {
    test("should update product quantity", () => {
      addItem({
        sku: "P101",
        name: "Laptop",
        price: 1000,
        quantity: 5,
      });

      updateQuantity("P101", 10);

      expect(findBySku("P101")?.quantity).toBe(10);
    });

    test("should do nothing if product does not exist", () => {
      updateQuantity("P999", 10);

      expect(inventory.size).toBe(0);
    });
  });

  // findBySku
  describe("findBySku", () => {
    test("should return the product if it exists", () => {
      const product = {
        sku: "P101",
        name: "Laptop",
        price: 1000,
        quantity: 5,
      };

      addItem(product);

      expect(findBySku("P101")).toEqual(product);
    });

    test("should return undefined if product does not exist", () => {
      expect(findBySku("P999")).toBeUndefined();
    });
  });

  // lowStock
  describe("lowStock", () => {
    test("should return products with quantity below threshold", () => {
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

      const result = lowStock(4);

      expect(result).toHaveLength(1);
      expect(result[0]?.sku).toBe("P102");
    });
  });

  // inventoryValue
  describe("inventoryValue", () => {
    test("should calculate the total inventory value", () => {
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

      expect(inventoryValue()).toBe(5050);
    });

    test("should return zero when inventory is empty", () => {
      expect(inventoryValue()).toBe(0);
    });
  });
});
