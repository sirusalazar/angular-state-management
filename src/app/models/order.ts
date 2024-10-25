import { CartItem } from './cart-item';

export interface Order {
  items: CartItem[];
  total: number;
}

export const mockOrder = (overrides?: Partial<Order>): Order => ({
  items: [],
  total: 0,
  ...overrides,
});
