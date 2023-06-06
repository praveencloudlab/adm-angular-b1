import { Component } from '@angular/core';
import { loadEmoployees } from 'src/data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  employees!: any[];
  searchText!:string;
  constructor() {
    this.employees=loadEmoployees();
  }


  

}
