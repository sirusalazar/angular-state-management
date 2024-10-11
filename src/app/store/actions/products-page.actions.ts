import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '@app-models';

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    loadProducts: emptyProps(),
    loadProductsSuccess: props<{ products: Product[] }>(),
    loadProductsFailure: props<{ error: string }>(),
  },
});
