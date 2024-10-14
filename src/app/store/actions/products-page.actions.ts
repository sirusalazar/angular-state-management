import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Order, Product } from '@app-models';

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    loadProducts: emptyProps(),
    updateProductsStock: props<{ order: Order }>(),
  },
});

export const ProductsPageApiActions = createActionGroup({
  source: 'Products Api Page',
  events: {
    loadProductsSuccess: props<{ products: Product[] }>(),
    loadProductsFailure: props<{ error: string }>(),
  },
});
