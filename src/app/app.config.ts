import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

import { cartEffects, productEffects } from '@app-store/effects';
import { CartState, ProductsState } from '@app-store/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(),
    provideState(ProductsState.FEATURE_KEY, ProductsState.reducers),
    provideState(CartState.FEATURE_KEY, CartState.reducers),
    provideEffects(productEffects, cartEffects),
    provideStoreDevtools({ logOnly: !isDevMode() }),
  ],
};
