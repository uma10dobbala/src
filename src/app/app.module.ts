import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/productservice';
import { HttpClientModule } from '@angular/common/http';
/*import { AddCustomerComponent } from './add-customer/add-customer.component';*/
import { AddSalesReportComponent } from './add-sales-report/add-sales-report.component';
import { SalesreportDetailsComponent } from './salesreport-details/salesreport-details.component';
import { HomeComponent } from './home/home.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderService } from './services/orderservice';
import { OrderListComponent } from './order-list/order-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './services/userservices';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    AddSalesReportComponent,
    SalesreportDetailsComponent,
    HomeComponent,
    AddOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    AddUserComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductService,OrderService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
