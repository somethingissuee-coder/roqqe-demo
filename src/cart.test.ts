import { describe, it, expect } from "vitest";
import { subtotal, applyDiscount } from "./cart";

describe("cart", () => {
  it("computes subtotal", () => {
    expect(subtotal([{ name: "a", price: 10, qty: 2 }, { name: "b", price: 5, qty: 1 }])).toBe(25);
  });
  it("applies a percentage discount", () => {
    expect(applyDiscount(200, 10)).toBe(180);
  });
});
