import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1-angular-core';
  name:string='Praveen';

  product={
    id: 1,
    name: 'Apple',
    price: 100
  }

}
