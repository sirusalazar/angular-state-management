import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatBadge } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

import { CartState } from '@app-store/state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbar, RouterOutlet, RouterLink, MatIcon, MatBadge, AsyncPipe],
  template: `
    <div class="main-container">
      <mat-toolbar color="primary" class="header">
        <a mat-button class="company-name" routerLink="/">
          <span>Home</span>
        </a>
        <div>
          <a mat-button routerLink="/">Products</a>
          <a mat-button routerLink="/cart"
            >Cart
            <span
              [matBadge]="itemsCount$ | async"
              matBadgePosition="below"
              matBadgeColor="warn"
            ></span>
          </a>
        </div>
      </mat-toolbar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      .company-name {
        font-size: 150%;
      }

      .header {
        height: 50px;
        position: sticky;
        display: flex;
        justify-content: space-between;
      }

      .content {
        padding: 10px;
      }

      a {
        text-decoration: none;
        white-space: normal;
        color: #fff;
        margin: 0 10px;
      }

      .main-container {
        display: flex;
        flex-direction: column;
      }
      .mat-badge.mat-badge {
        bottom: 12px;
        margin-left: 20px;
      }
    `,
  ],
})
export class AppComponent {
  protected readonly itemsCount$ = this.store.select(
    CartState.selectItemsCount
  );
  constructor(private store: Store) {}
}
