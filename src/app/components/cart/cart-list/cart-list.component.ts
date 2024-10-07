import { Component } from '@angular/core';
import { CartListItemComponent } from '../cart-list-item/cart-list-item.component';
import { NgFor } from '@angular/common';
import { CartItem } from '../../../models/cart-item';

const CART_ITEMS: CartItem[] = [];

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [NgFor, CartListItemComponent],
  template: `
    <h2>Shopping Cart</h2>
    <app-cart-list-item *ngFor="let item of cartItems" />
  `,
  styles: [
    `
      h2 {
        text-align: center;
      }
    `,
  ],
})
export class CartListComponent {
  cartItems = CART_ITEMS;
}
