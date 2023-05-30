import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

textData=''
sampleData='';

f4(s4: any) {
this.textData=s4.target.value

}
  

  textColor='color:green'

f3(s3: any) {
console.log(s3.target.value);
this.textColor='color:'+s3.target.value;
}

isHidden: boolean = false;


f2(s1:any) {

  this.isHidden=!this.isHidden;
  console.log(this.isHidden);

}


f1() {
 
  
  

  console.log("Welcome to f1 method");
  
}
 
  isDisabled: boolean = false;







}
