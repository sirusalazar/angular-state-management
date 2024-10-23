import { State, createReducer, on } from '@ngrx/store';
import { Product } from '../../models/Product';
import {
  ProductsPageActions,
  ProductsPageApiActions,
} from '@app-store/actions';

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
    ProductsPageApiActions.loadProductsSuccess,
    (state, { products }): ProductsState => {
      return { ...state, products };
    }
  ),
  on(
    ProductsPageApiActions.loadProductsFailure,
    (state, { error }): ProductsState => {
      return { ...state, error };
    }
  ),
  on(
    ProductsPageActions.updateProductsStock,
    (state, { order }): ProductsState => {
      const updatedProducts = state.products.map((product) => {
        const item = order.items.find((i) => i.product?.id === product.id);
        return item
          ? { ...product, stock: product.stock - item.quantity }
          : product;
      });
      return { ...state, products: [...updatedProducts] };
    }
  )
);
