export interface Item { name: string; price: number; qty: number }

export function subtotal(items: Item[]): number {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

// Applies a percentage discount (e.g. 10 = 10% off) and rounds to cents.
export function applyDiscount(total: number, percent: number): number {
  // BUG: subtracts the percent as a flat amount instead of a percentage
  return Math.round((total - percent) * 100) / 100;
}
