import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartActions, ProductsPageActions } from '@app-store/actions';
import { debounceTime, map } from 'rxjs';

export const submitOrder$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(CartActions.submitOrder),
      debounceTime(1000),
      map(({ order }) => {
        console.log(
          '%cOrder Submitted!!!',
          'color:red; font-size:20px;',
          order
        );
        return ProductsPageActions.updateProductsStock({ order });
      })
    );
  },
  { functional: true }
);
