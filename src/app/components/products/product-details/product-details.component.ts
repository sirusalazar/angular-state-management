import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StepperComponent } from './stepper/stepper.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, StepperComponent],
  template: `
    <h3>Product Details</h3>
    <mat-card class="card-container">
      <img mat-card-image src="/assets/images/fallback-image.png" alt="" />
      <mat-card-content>
        <h4>Product name</h4>
        <p></p>
        <app-stepper />
      </mat-card-content>
      <mat-card-actions>
        <button mat-flat-button color="primary">ADD TO CART</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      h3,
      h4 {
        text-align: center;
      }
      .card-container {
        min-width: 350px;
      }
      .mat-mdc-card-image {
        height: 200px;
      }

      .mat-mdc-card-content {
        height: 200px;
        display: flex;
        flex-direction: column;

        p {
          flex-grow: 1;
        }
      }
      .mdc-button {
        width: 100%;
      }
    `,
  ],
})
export class ProductDetailsComponent {}
