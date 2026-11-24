import { describe, test, expect } from "@jest/globals";
import { isUser } from "../excersise3/excersise3.js";

describe("isUser", () => {
  test("should return true for valid user", () => {
    const user = {
      id: 1,
      name: "Shahed",
      email: "shahed@example.com",
    };

    expect(isUser(user)).toBe(true);
  });

  test("should return false if id is a string", () => {
    const user = {
      id: "1",
      name: "Shahed",
      email: "shahed@example.com",
    };

    expect(isUser(user)).toBe(false);
  });

  test("should return false if name is a number", () => {
    const user = {
      id: 1,
      name: 123,
      email: "shahed@example.com",
    };

    expect(isUser(user)).toBe(false);
  });

  test("should return false if email is missing", () => {
    const user = {
      id: 1,
      name: "Shahed",
    };

    expect(isUser(user)).toBe(false);
  });

  test("should return false for null", () => {
    expect(isUser(null)).toBe(false);
  });

  test("should return false for an array", () => {
    expect(isUser([])).toBe(false);
  });

  test("should return false for a string", () => {
    expect(isUser("Shahed")).toBe(false);
  });
});
