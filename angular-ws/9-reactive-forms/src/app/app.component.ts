import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

isSubmitted = false;
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

   constructor(private fb:FormBuilder){
    this.productForm=this.fb.group(
      {
        productTitle:['', [Validators.required,Validators.minLength(3)]],
        description:['',Validators.required],
        price:[0,Validators.required],
        quantity:[0,Validators.required]
      }
    )
   }
}
