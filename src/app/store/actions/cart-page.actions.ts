import { createActionGroup, props } from '@ngrx/store';

import { CartItem, Order } from '@app-models';

export const CartActions = createActionGroup({
  source: 'Cart Page',
  events: {
    addItemToCart: props<{ cartItem: CartItem }>(),
    removeItemFromCart: props<{ itemId: number }>(),
    submitOrder: props<{ order: Order }>(),
  },
});
