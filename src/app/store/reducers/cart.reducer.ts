import { createReducer, on } from '@ngrx/store';

import { CartItem } from '@app-models';
import { CartActions } from '@app-store/actions';

export interface State {
  cartItems: CartItem[];
  error: string;
}

export const initialState: State = {
  cartItems: [],
  error: '',
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItemToCart, (state, { cartItem }): State => {
    return { ...state, cartItems: [...state.cartItems, cartItem] };
  }),
  on(CartActions.removeItemFromCart, (state, { itemId }): State => {
    const cartItems = state.cartItems.filter((c) => c.product?.id !== itemId);
    return { ...state, cartItems };
  }),
  on(CartActions.submitOrder, () => {
    return { ...initialState };
  })
);
