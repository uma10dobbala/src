import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/productservice';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private productService: ProductService) {}

  fetchProduct(myform: any) {
    let data = myform.value;
    let id: number = data.productId;

    let observable: Observable<Product> = this.productService.fetchProductById(
      id
    );
    // let successHandler = (product: Product) => (this.product = product);
    // let errHandler = (err) => console.log('error is' + err.message);
    observable.subscribe(
      (product: Product) => (this.product = product),
      (err) => console.log('error is' + err.message)
    );
  }
}
