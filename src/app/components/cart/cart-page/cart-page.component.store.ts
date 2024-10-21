import { Injectable } from '@angular/core';
import { CartItem } from '@app-models';
import { CartActions } from '@app-store/actions';
import { CartState } from '@app-store/state';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { Observable, tap, withLatestFrom } from 'rxjs';

interface State {
  items: CartItem[];
}

const initialState: State = {
  items: [],
};

@Injectable()
export class CartPageStore extends ComponentStore<State> {
  //#region  selectors
  readonly items$ = this.store
    .select(CartState.selectCartItems)
    .pipe(tap((items) => this.patchState({ items })));
  readonly total$ = this.select(this.items$, (items) =>
    items.map((i) => i.total).reduce((a, b) => a + b, 0)
  );
  //#endregion

  constructor(private readonly store: Store) {
    super(initialState);
  }

  //#region  effects
  readonly removeItem = this.effect((itemId$: Observable<number>) => {
    return itemId$.pipe(
      tap((itemId) =>
        this.store.dispatch(CartActions.removeItemFromCart({ itemId }))
      )
    );
  });

  readonly submitOrder = this.effect(($) => {
    return $.pipe(
      withLatestFrom(this.total$),
      tap(([, total]) => {
        this.store.dispatch(
          CartActions.submitOrder({
            order: {
              items: this.get().items,
              total,
            },
          })
        );
      })
    );
  });
  //#endregion
}
