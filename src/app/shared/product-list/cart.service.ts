import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(item: Product) {
    this.items.push(item);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return from(
      this.http.get<{ type: string; price: number }[]>('/assets/shipping.json')
    );
  }
}
