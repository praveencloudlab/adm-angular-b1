import { Component } from '@angular/core';
import { loadEmoployees } from 'src/data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  jsonColumns:any;


  employees!: any[];
  searchText!:string;
  columnName=''

  setColumn(colName:any) {
    console.log(colName.target.value);
    
    //this.searchText=colName.target.value
    this.columnName=colName.target.value;
  }
  constructor() {
    this.employees=loadEmoployees();
    this.jsonColumns=Object.keys(this.employees[0]);
    console.log(this.jsonColumns);
    
  }


  

}
