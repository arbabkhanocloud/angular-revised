import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/product';
import { CartService } from '../product-list/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private router: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.router.snapshot.paramMap.get('productId'));
    this.product = products.find((product) => product.id === productId);
  }

  addToCart(item: Product) {
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
