import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ProductsState,
  productsReducer,
} from '@app-store/reducers/products.reducer';

export const FEATURE_KEY = 'products';

export const reducers = productsReducer;

export const selectProductsState =
  createFeatureSelector<ProductsState>(FEATURE_KEY);

// Selector to get products
export const selectProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

//selector to get error
export const selectError = createSelector(
  selectProductsState,
  (state) => state.error
);
