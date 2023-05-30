import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <div>
      <ul *ngFor="let city of cities">
        <li>{{city}}</li>
      </ul>
      
    </div>
  `
})
export class BoxComponent {

  cities=['London', 'Paris', 'Rome', 'Berlin', 'Moscow']


}
