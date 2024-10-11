import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '@app-models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly BASE_URL = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${this.BASE_URL}/products?limit=10`)
      .pipe(map((products) => products.map((p) => ({ ...p, stock: 10 }))));
  }
}
