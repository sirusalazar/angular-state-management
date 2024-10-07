import { Routes } from '@angular/router';
import { ProductsPageComponent } from './components/products/products-page/products-page.component';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
];
