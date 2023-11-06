import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { NotifyComponent } from './shared/notify-component/notify.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shared/shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NotifyComponent,
    ProductDetailsComponent,
    TopBarComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
