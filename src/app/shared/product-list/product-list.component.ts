import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { products } from 'src/app/product';

@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor() {}
  products = [...products];

  share() {
    window.alert('the item has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
