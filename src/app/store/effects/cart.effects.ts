import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartActions } from '../actions/cart-page.actions';
import { debounceTime, tap } from 'rxjs';

export const submitOrder$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(CartActions.submitOrder),
      debounceTime(1000),
      tap((order) =>
        console.log('%sOrder Submitted!!!', 'color:red; font-size:16px;', order)
      )
    );
  },
  { functional: true, dispatch: false }
);
