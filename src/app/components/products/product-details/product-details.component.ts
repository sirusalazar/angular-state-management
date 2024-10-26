import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductsPageStore } from '../products-page/products-page.component.store';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { StepperComponent } from '@app-shared/components/stepper/stepper.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    StepperComponent,
    AsyncPipe,
    NgIf,
    JsonPipe,
  ],
  template: `
    <h3>Product Details</h3>
    <mat-card class="card-container">
      <ng-container *ngIf="store.vm$ | async as vm">
        <div class="img-container">
          <img
            mat-card-image
            [src]="
              vm.selectedProduct?.image ?? '/assets/images/fallback-image.png'
            "
            alt=""
          />
        </div>
        <mat-card-content>
          <h4>{{ vm.selectedProduct?.title }}</h4>
          <p>{{ vm.selectedProduct?.description }}</p>
          <app-stepper
            [control]="store.quantityFormControl"
            [minusBtnEnabled]="vm.minusEnabled"
            [plusBtnEnabled]="vm.plusBtnEnabled"
          />
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-flat-button
            color="primary"
            (click)="store.addItemToCart()"
            [disabled]="!vm.checkoutBtnEnabled"
          >
            ADD TO CART
          </button>
        </mat-card-actions>
      </ng-container>
    </mat-card>
  `,
  styles: [
    `
      h3,
      h4 {
        text-align: center;
      }
      .card-container {
        width: 350px;
      }
      .img-container {
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
      }
      .mat-mdc-card-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        max-height: 100%;
      }

      .mat-mdc-card-content {
        height: 250px;
        display: flex;
        flex-direction: column;

        p {
          flex-grow: 1;
          max-height: 115px;
          overflow-y: auto;
        }
      }
      .mdc-button {
        width: 100%;
      }
    `,
  ],
})
export class ProductDetailsComponent {
  constructor(protected readonly store: ProductsPageStore) {}
}
