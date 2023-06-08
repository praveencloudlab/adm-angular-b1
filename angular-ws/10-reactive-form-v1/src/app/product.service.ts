import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:8080/api/products';

  // save product
  saveProduct(product:any){
    return this.http.post(this.baseUrl, product);
  }

  // get all products
  getProducts(){
    return this.http.get(this.baseUrl);
  }

  //get all categories
  getCategories(){
    return this.http.get(this.baseUrl + '/categories');
  }

  



}
