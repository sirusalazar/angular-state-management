import { createServiceFactory } from '@ngneat/spectator/jest';
import { ProductsPageStore } from './products-page.component.store';
import { provideComponentStore } from '@ngrx/component-store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductsState } from '@app-store/state';
import { Product, mockProduct } from '@app-models';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { CartActions } from '@app-store/actions';

describe('ProductsPageComponent', () => {
  const createService = createServiceFactory({
    service: ProductsPageStore,
    providers: [provideMockStore()],
  });

  const setup = ({ products = [] }: { products?: Product[] } = {}) => {
    const spectator = createService();
    const store = spectator.inject(MockStore);
    store.overrideSelector(ProductsState.selectProducts, products);

    return { spectator, store };
  };

  it('should return the list products from the global store', () => {
    //Arrange
    const products = [mockProduct()];
    const { spectator } = setup({ products });

    //Act
    const result = subscribeSpyTo(spectator.service.products$);

    //Assert
    expect(result.getLastValue()).toBe(products);
  });

  it('should select product when the effect is invoked', () => {
    //Arrange
    const product = mockProduct();
    const { spectator } = setup();

    //Act
    const result = subscribeSpyTo(spectator.service.selectedProduct$);
    spectator.service.selectProduct(product);

    //Assert
    expect(result.getLastValue()).toBe(product);
  });

  it('should add a new product to the cart', () => {
    //Arrange
    const product = mockProduct();
    const { spectator, store } = setup();
    const spy = jest.spyOn(store, 'dispatch');

    //Act
    spectator.service.ngrxOnStoreInit();
    spectator.service.quantityFormControl.setValue(2);
    spectator.service.selectProduct(product);
    spectator.service.addItemToCart();

    //Assert
    expect(spy).toHaveBeenCalledWith(
      CartActions.addItemToCart({
        cartItem: {
          quantity: 2,
          total: product.price * 2,
          product,
        },
      })
    );
  });
});
