import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartItem } from '../../../models/cart-item';

@Component({
  selector: 'app-cart-list-item',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="cart-item">
          <div class="cart-item__section">
            <img
              src="{{ item.product?.image }}"
              alt="{{ item.product?.image }}"
            />
          </div>
          <div class="cart-item__section">
            <h4>{{ item.product?.title }}</h4>
            <span>{{ item.product?.description }}</span>
          </div>
          <div class="cart-item__section">
            <span>{{ item.quantity }}</span>
          </div>
          <div class="cart-item__section">
            <strong>{{ item.total }}</strong>
          </div>
          <div class="cart-item__section">
            <mat-icon color="warn" matTooltip="remove">delete</mat-icon>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .cart-item {
        display: flex;
        border-radius: 4px;
        box-shadow: var(--mdc-elevated-card-container-shape);
      }

      .mat-mdc-card {
        height: 135px;
      }

      .cart-item__image {
        width: 100px;

        img {
          max-width: 100%;
          width: auto;
          height: 100px;
        }
      }

      .cart-item__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 25px;
      }

      mat-icon {
        cursor: pointer;
      }
    `,
  ],
})
export class CartListItemComponent {
  item: CartItem = {} as CartItem;
}
