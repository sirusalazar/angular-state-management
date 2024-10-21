import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartItem } from '../../../models/cart-item';
import { CartPageStore } from '../cart-page/cart-page.component.store';

@Component({
  selector: 'app-cart-list-item',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="cart-item">
          <div class="cart-item__section image">
            <img
              src="{{ item.product?.image }}"
              alt="{{ item.product?.image }}"
            />
          </div>
          <div class="cart-item__section">
            <h4>{{ item.product?.title }}</h4>
            <span class="description">{{ item.product?.description }}</span>
          </div>
          <div class="cart-item__section">
            <span>{{ item.quantity }}</span>
          </div>
          <div class="cart-item__section total">
            <strong>{{ item.total }}</strong>
          </div>
          <div class="cart-item__section">
            <mat-icon
              color="warn"
              matTooltip="remove"
              (click)="store.removeItem(item.product?.id ?? -1)"
              >delete</mat-icon
            >
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .cart-item {
        display: flex;
      }

      .mat-mdc-card {
        height: 135px;
        margin: 10px 0;
      }

      .cart-item__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 25px;

        &.image {
          width: 100px;
          img {
            max-width: 100%;
            width: auto;
            height: 100px;
          }
        }

        .description {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 620px;
        }

        &.total {
          width: 50px;
        }
      }

      mat-icon {
        cursor: pointer;
      }
    `,
  ],
})
export class CartListItemComponent {
  @Input({ required: true }) item!: CartItem;
  constructor(readonly store: CartPageStore) {}
}
