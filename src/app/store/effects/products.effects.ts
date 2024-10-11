import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsPageActions } from '../actions/products-page.actions';
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
            ProductsPageActions.loadProductsSuccess({ products })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              ProductsPageActions.loadProductsFailure({ error: error.message })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
