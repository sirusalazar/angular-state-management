import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  template: `
    <mat-card class="summary">
      <mat-card-content>
        <h3>Summary</h3>
        <mat-divider></mat-divider>
        <div class="products">
          <div>
            <span>Products Shipping</span>
            <span>$ 0</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
        <mat-divider></mat-divider>
        <div class="totals">
          <strong>Total</strong>
          <strong>$ 0</strong>
        </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-flat-button color="primary">GO TO CHECKOUT</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      h3 {
        text-align: center;
      }
      .summary {
        min-width: 350px;
      }

      .mdc-button {
        width: 100%;
      }
      .products,
      .totals {
        padding: 15px 0;
      }

      .products {
        div {
          display: flex;
          justify-content: space-between;
        }
      }

      .totals {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class CartSummaryComponent {}
