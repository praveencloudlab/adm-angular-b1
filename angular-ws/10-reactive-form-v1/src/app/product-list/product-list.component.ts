import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent {

  products:any
  constructor(private prosuctService:ProductService) {
    this.prosuctService.getProducts().subscribe(data =>this.products = data);
   }

}
