import { Component } from '@angular/core';
import { CartService } from '../../product-list/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.items = this.cartService.clearCart();
    if (this.checkoutForm.value.name && this.checkoutForm.value.address) {
      console.warn('Your order has been submitted', this.checkoutForm.value);
      window.alert('your order has been submitted');
    } else {
      window.alert('name and address Fields are required');
    }
    this.checkoutForm.reset();
  }
}
