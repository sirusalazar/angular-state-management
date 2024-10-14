import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ProductsPageActions,
  ProductsPageApiActions,
} from '@app-store/actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

export const loadPRoducts$ = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      switchMap(() =>
        productsService.getProducts().pipe(
          map((products) =>
            ProductsPageApiActions.loadProductsSuccess({ products })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              ProductsPageApiActions.loadProductsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
