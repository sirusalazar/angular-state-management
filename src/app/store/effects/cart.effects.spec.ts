import { CartItem, mockOrder, mockProduct } from '@app-models';
import { CartActions, ProductsPageActions } from '@app-store/actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { submitOrder$ } from './cart.effects';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe('cart effects', () => {
  describe('submitOrder$', () => {
    it('should update the stock after the order is submitted', () => {
      //Arrange
      const router = { navigate: jest.fn() };
      const cartItem: CartItem = {
        product: mockProduct(),
        quantity: 1,
        total: 1,
      };
      const order = mockOrder({ items: [cartItem] });
      const actions$ = of(CartActions.submitOrder({ order }));

      //Act
      const spy = subscribeSpyTo(
        submitOrder$(actions$, router as unknown as Router)
      );

      //Assert
      expect(spy.getLastValue()).toEqual(
        ProductsPageActions.updateProductsStock({ order })
      );
    });
  });
});
