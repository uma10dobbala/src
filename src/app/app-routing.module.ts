import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AddUserComponent } from './add-user/add-user.component';
/*import { AddCustomerComponent } from 'src/app/add-customer/add-customer.component';
import { CustomerDetailsComponent } from 'src/app/customer-details/customer-details.component';*/


const routes: Routes = [
  {path:"", component:HomeComponent},
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'list-product', component: ProductListComponent },
  {path: 'list-order', component: OrderListComponent},
  { path: 'add-order', component: AddOrderComponent },
  /*{path:'add-customer',component:AddCustomerComponent},
  {path:'customerDetails',component:CustomerDetailsComponent},*/
  {path: 'order-details', component: OrderDetailsComponent},
  {
    path:'addUser',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
