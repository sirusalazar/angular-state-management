import { createFeatureSelector, createSelector } from '@ngrx/store';

import { cartReducer, State } from '@app-store/reducers/cart.reducer';

export const FEATURE_KEY = 'cart';

export const reducers = cartReducer;

export const selectCartState = createFeatureSelector<State>(FEATURE_KEY);

// Selector to get all items
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.cartItems
);

//selector to get error
export const selectError = createSelector(
  selectCartState,
  (state) => state.error
);

// selector to get the count
export const selectItemsCount = createSelector(
  selectCartItems,
  (items) => items.length
);
