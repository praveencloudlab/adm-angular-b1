import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeefilter'
})
export class EmployeePipe implements PipeTransform {

  transform(emps: any[], searchText: string): any[] {
   

    if(!emps)
     return [];
     if(!searchText)
     return emps;
        

     searchText=searchText.toLocaleLowerCase();

     return emps.filter(emp=>{
      const name = emp.first_name.toLocaleLowerCase();
      return name.includes(searchText);
     })
    
  }

}
