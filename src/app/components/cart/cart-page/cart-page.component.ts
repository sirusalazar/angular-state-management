import { Component } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartPageStore } from './cart-page.component.store';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartListComponent, CartSummaryComponent],
  providers: [CartPageStore],
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
        width: 100%;
        box-sizing: border-box;
      }

      app-cart-list {
        flex-grow: 1;
      }
    `,
  ],
})
export class CartPageComponent {}
