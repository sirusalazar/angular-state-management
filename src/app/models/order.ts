import { CartItem } from './cart-item';

export interface Order {
  items: CartItem[];
  total: number;
}
