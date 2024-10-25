import { createServiceFactory } from '@ngneat/spectator/jest';
import { CartPageStore } from './cart-page.component.store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CartState } from '@app-store/state';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { CartItem, mockProduct } from '@app-models';
import { CartActions } from '@app-store/actions';

describe('CartPageStore', () => {
  const createService = createServiceFactory({
    service: CartPageStore,
    providers: [provideMockStore()],
  });
  const setup = ({ items = [] }: { items?: CartItem[] } = {}) => {
    const spectator = createService();
    const store = spectator.inject(MockStore);
    store.overrideSelector(CartState.selectCartItems, items);

    return { spectator, store };
  };

  it('should return cartItems', () => {
    //Arrange
    const items = [
      { product: mockProduct(), quantity: 1, total: 1 } as CartItem,
    ];
    const { spectator } = setup({ items });

    //Act
    const result = subscribeSpyTo(spectator.service.items$);

    //Assert
    expect(result.getLastValue()).toBe(items);
  });

  it('should add a new product to the cart', () => {
    //Arrange
    const product = mockProduct();
    const items = [{ product, quantity: 1, total: 1 } as CartItem];
    const { spectator, store } = setup({ items });
    const spy = jest.spyOn(store, 'dispatch');

    //Act
    spectator.service.submitOrder();

    //Assert
    expect(spy).toHaveBeenCalledWith(
      CartActions.submitOrder({
        order: {
          items,
          total: 1,
        },
      })
    );
  });
});
