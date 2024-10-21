import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartActions, ProductsPageActions } from '@app-store/actions';
import { debounceTime, map } from 'rxjs';
import { Router } from '@angular/router';

export const submitOrder$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(CartActions.submitOrder),
      debounceTime(1000),
      map(({ order }) => {
        console.log(
          '%cOrder Submitted!!!',
          'color:red; font-size:20px;',
          order
        );
        router.navigate(['']);
        return ProductsPageActions.updateProductsStock({ order });
      })
    );
  },
  { functional: true }
);
