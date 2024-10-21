import { Component } from '@angular/core';
import { CartListItemComponent } from '../cart-list-item/cart-list-item.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { CartPageStore } from '../cart-page/cart-page.component.store';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [NgFor, CartListItemComponent, AsyncPipe],
  template: `
    <h2>Shopping Cart</h2>
    <app-cart-list-item
      *ngFor="let item of store.items$ | async"
      [item]="item"
    />
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
  constructor(protected readonly store: CartPageStore) {}
}
