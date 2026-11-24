
import { describe, test, expect } from "@jest/globals";

import { getProperty } from "../excersise5/excersise5.js";

describe("getProperty", () => {
  test("should return the name property", () => {
    const user = {
      id: 1,
      name: "Shahed",
      email: "shahed@example.com",
    };

    expect(getProperty(user, "name")).toBe("Shahed");
  });

  test("should return the id property", () => {
    const user = {
      id: 1,
      name: "Shahed",
      email: "shahed@example.com",
    };

    expect(getProperty(user, "id")).toBe(1);
  });

  test("should return the email property", () => {
    const user = {
      id: 1,
      name: "Shahed",
      email: "shahed@example.com",
    };

    expect(getProperty(user, "email")).toBe("shahed@example.com");
  });

  test("should work with different object types", () => {
    const product = {
      id: 101,
      title: "Laptop",
      price: 1000,
    };

    expect(getProperty(product, "title")).toBe("Laptop");
    expect(getProperty(product, "price")).toBe(1000);
  });
});
