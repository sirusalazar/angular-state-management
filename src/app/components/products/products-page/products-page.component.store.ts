import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '@app-models';
import { CartActions } from '@app-store/actions';
import { ProductsState } from '@app-store/state';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { Observable, filter, switchMap, tap } from 'rxjs';

interface State {
  selectedProduct?: Product;
  quantity: number;
}

const initialState: State = {
  quantity: 1,
};

@Injectable()
export class ProductsPageStore
  extends ComponentStore<State>
  implements OnStoreInit
{
  //  #region variables
  readonly quantityFormControl = new FormControl<number>(1);
  // #endregion

  //#region selectors

  readonly products$ = this.store.select(ProductsState.selectProducts);
  readonly selectedProduct$ = this.select((state) => state.selectedProduct);

  //#endregion
  constructor(private readonly store: Store) {
    super(initialState);
  }

  ngrxOnStoreInit() {
    this.inputChanged();
  }

  //#region effects

  readonly selectProduct = this.effect((product$: Observable<Product>) => {
    return product$.pipe(
      tap((product) => {
        this.patchState({
          selectedProduct: product,
        });
      })
    );
  });

  private inputChanged = this.effect(($) => {
    return $.pipe(
      switchMap(() => this.quantityFormControl.valueChanges),
      filter(Boolean),
      tap((quantity) => {
        this.patchState({
          quantity,
        });
      })
    );
  });

  readonly addItemToCart = this.effect(($) => {
    return $.pipe(
      tap(() => {
        const quantity = this.get((state) => state.quantity);
        const product = this.get().selectedProduct;
        if (product) {
          this.store.dispatch(
            CartActions.addItemToCart({
              cartItem: {
                product,
                quantity,
                total: quantity * product.price,
              },
            })
          );
        }
      })
    );
  });
  //#endregion
}
