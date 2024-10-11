import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/Product';
import { ProductsPageActions } from '../actions/products-page.actions';

export interface ProductsState {
  products: Product[];
  error: string;
}

export const initialState: ProductsState = {
  products: [],
  error: '',
};

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsPageActions.loadProductsSuccess,
    (state, { products }): ProductsState => {
      return { ...state, products };
    }
  ),
  on(
    ProductsPageActions.loadProductsFailure,
    (state, { error }): ProductsState => {
      return { ...state, error };
    }
  )
);
