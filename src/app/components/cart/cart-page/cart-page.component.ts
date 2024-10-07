import { Component } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartListComponent, CartSummaryComponent],
  template: `
    <div class="container">
      <app-cart-list />
      <app-cart-summary />
    </div>
  `,
  styles: [
    `
      .container {
        height: 100%;
        display: flex;
        gap: 25px;
        padding: 0 30px;
      }

      app-cart-list {
        flex-grow: 1;
      }
    `,
  ],
})
export class CartPageComponent {}
