import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import loadCategories from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

isSubmitted = false;
brands:any;

handleCategoryChange(){
  const categoryTitle=this.productForm.value.category;
  const selectedCategory= this.categories.find(cat=>cat.categoryTitle===categoryTitle)

  if(selectedCategory){
    this.brands=selectedCategory.brands;
    console.log(this.brands);
    
  }
}

handleSubmit() {

  if(this.productForm.valid) {  
  console.log(this.productForm.value);
  } else {
    console.log("Invalid form data");
    
  }
}

  productForm:FormGroup;

    fc():{[key:string]:AbstractControl | null}{
    return this.productForm.controls;
   }

   categories:any[]

   
    
     


   constructor(private fb:FormBuilder){
    this.categories=loadCategories();
    console.log(this.categories);
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
        category:[''],
        brand:['']
      }
    )
   }
}
