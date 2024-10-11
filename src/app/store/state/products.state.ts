import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductReducer as fromProducts } from '@app-store/reducers';

export const FEATURE_KEY = 'products';

export interface State {
  products: fromProducts.ProductsState;
}

export const reducers = {
  products: fromProducts.productsReducer,
};

export const selectProductsState = createFeatureSelector<State>(FEATURE_KEY);

const selectProductsSlice = createSelector(
  selectProductsState,
  (state: State) => state.products
);

// Selector to get products
export const selectProducts = createSelector(
  selectProductsSlice,
  (state) => state.products
);

//selector to get error
export const selectError = createSelector(
  selectProductsSlice,
  (state) => state.error
);
