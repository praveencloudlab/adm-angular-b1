import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import loadCategories from './data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  baseUrl = "http://localhost:8080/api/products"

isSubmitted = false;
brands:any;
categories:any


handleCategoryChange(){
  const categoryId=this.productForm.value.categoryId;
  console.log(categoryId);
  
  const selectedCategory= this.categories.find((cat:any)=>cat.categoryId==categoryId)

  if(selectedCategory){
    this.brands=selectedCategory.brands;
    console.log(this.brands);
    
  }
}

handleSubmit() {

  if(this.productForm.valid) {  
  console.log(this.productForm.value);
  // save to database
  this.http.post(this.baseUrl, this.productForm.value).subscribe(resp=>console.log(resp));
  

  } else {
    console.log("Invalid form data");
    
  }
}

  productForm:FormGroup;

    fc():{[key:string]:AbstractControl | null}{
    return this.productForm.controls;
   }



   constructor(private fb:FormBuilder,private http:HttpClient){
   // this.categories=loadCategories();
    //console.log(this.categories);
    this.productForm=this.fb.group(
      {
        productTitle:['', [Validators.required,Validators.minLength(3)]],
        description:['',Validators.required],
        price:this.fb.group({
          price:[0,Validators.required],
        }),
        stock:this.fb.group({
          stock:[0,Validators.required],
        }),
        categoryId:[''],
        brandId:[''],
        keywords:['',Validators.required],
        rating:['',Validators.required]
      }
    )
   }
  ngOnInit(): void {
    this.http.get(`${this.baseUrl}/categories`).subscribe(data => this.categories=data)


  }
}
