import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { provideComponentStore } from '@ngrx/component-store';
import { ProductsPageStore } from './products-page.component.store';

@Component({
  selector: 'app-products-page',
  standalone: true,
  providers: [provideComponentStore(ProductsPageStore)],
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
export class ProductsPageComponent {}
