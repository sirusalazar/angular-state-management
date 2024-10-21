import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { ProductsPageStore } from '../products-page/products-page.component.store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    NgOptimizedImage,
    AsyncPipe,
    NgIf,
  ],
  template: `
    <h2>Product List</h2>
    <ng-container *ngIf="store.products$ | async as products">
      <table mat-table [dataSource]="products" class="mat-elevation-z1">
        <ng-container matColumnDef="image">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <img [ngSrc]="element.image" width="50" height="50" />
          </td>
        </ng-container>

        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">
            <strong>{{ element.title }}</strong>
          </td>
        </ng-container>

        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef>Price</th>
          <td mat-cell *matCellDef="let element">$ {{ element.price }}</td>
        </ng-container>

        <ng-container matColumnDef="stock">
          <th mat-header-cell *matHeaderCellDef>Stock</th>
          <td mat-cell *matCellDef="let element">{{ element.stock }}</td>
        </ng-container>

        <ng-container matColumnDef="details" stickyEnd>
          <th mat-header-cell *matHeaderCellDef>&nbsp;</th>
          <td mat-cell *matCellDef="let element">
            <mat-icon
              matTooltip="View details"
              (click)="store.selectProduct(element)"
              >remove_red_eye</mat-icon
            >
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <ng-container matColumnDef="nodata">
          <td
            mat-footer-row
            *matFooterCellDef
            [colSpan]="displayedColumns.length"
            style="text-align: center;"
          >
            No Products Found
          </td>
        </ng-container>

        <tr
          mat-footer-row
          [hidden]="products.length > 0"
          *matFooterRowDef="['nodata']"
        ></tr>
      </table>
    </ng-container>
  `,
  styles: [
    `
      img {
        padding: 10px 0;
        width: 50px;
      }

      th {
        font-size: 20px;
        font-weight: 500;
      }

      mat-icon {
        cursor: pointer;
      }

      strong {
        font-size: 16px;
        font-weight: 500;
      }
    `,
  ],
})
export class ProductListComponent {
  displayedColumns: string[] = ['image', 'title', 'price', 'stock', 'details'];
  constructor(protected readonly store: ProductsPageStore) {}
}
