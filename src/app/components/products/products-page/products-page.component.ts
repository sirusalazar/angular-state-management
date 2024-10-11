import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Store } from '@ngrx/store';
import * as productsState from '../../../store/state/products.state';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductListComponent, ProductDetailsComponent],
  template: `<div class="container">
    <app-product-list />
    <app-product-details />
  </div>`,
  styles: [
    `
      .container {
        height: 100%;
        display: flex;
        gap: 25px;
        padding: 0 30px;
      }

      app-product-list {
        flex-grow: 1;
      }
    `,
  ],
})
export class ProductsPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(productsState.selectProducts)
      .subscribe((products) => console.log('products....', products));
  }
}
