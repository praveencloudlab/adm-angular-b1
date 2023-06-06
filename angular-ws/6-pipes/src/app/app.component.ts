import { Component } from '@angular/core';
import { loadEmoployees } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees!:any[];
  date = new Date();
  searchText = '';

  constructor() {
    this.employees=loadEmoployees();   
  }


}
