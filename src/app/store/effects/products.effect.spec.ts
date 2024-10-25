import { subscribeSpyTo } from '@hirez_io/observer-spy';
import {
  ProductsPageActions,
  ProductsPageApiActions,
} from '@app-store/actions';
import { of, throwError } from 'rxjs';
import { loadPRoducts$ } from './products.effects';
import { mockProduct } from '@app-models';
import { ProductsService } from 'app/services/products.service';

describe('product effects', () => {
  const setup = (response$ = of({})) => {
    const productsService = {
      getProducts: () => response$,
    } as ProductsService;

    return { productsService };
  };
  describe('loadProductList$', () => {
    it('should load product lists', () => {
      // Arrange
      const products = [mockProduct()];
      const { productsService } = setup(of(products));
      const actions$ = of(ProductsPageActions.loadProducts());

      //Act
      const spy = subscribeSpyTo(loadPRoducts$(actions$, productsService));

      //Assert
      expect(spy.getFirstValue()).toEqual(
        ProductsPageApiActions.loadProductsSuccess({ products })
      );
    });

    it('should dispatch an error when product endpoint fails', () => {
      // Arrange
      const error = throwError(() => new Error('Error'));
      const { productsService } = setup(error);
      const actions$ = of(ProductsPageActions.loadProducts());

      //Act
      const spy = subscribeSpyTo(loadPRoducts$(actions$, productsService));

      //Assert
      expect(spy.getFirstValue()).toEqual(
        ProductsPageApiActions.loadProductsFailure({ error: 'Error' })
      );
    });
  });
});
