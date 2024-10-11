import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartReducer as fromCart } from '@app-store/reducers';

export const FEATURE_KEY = 'cart';

export interface State {
  cart: fromCart.State;
}

export const reducers = {
  cart: fromCart.cartReducer,
};

export const selectCartState = createFeatureSelector<State>(FEATURE_KEY);

const selectCartSlice = createSelector(
  selectCartState,
  (state: State) => state.cart
);

// Selector to get all items
export const selectCartItems = createSelector(
  selectCartSlice,
  (state) => state.cartItems
);

//selector to get error
export const selectError = createSelector(
  selectCartSlice,
  (state) => state.error
);

// selector to get the count
export const selectItemsCount = createSelector(
  selectCartItems,
  (items) => items.length
);
