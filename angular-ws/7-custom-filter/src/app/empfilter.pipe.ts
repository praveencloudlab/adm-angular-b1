import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'empfilter'
})
export class EmpfilterPipe implements PipeTransform {

  transform(employees: any[], serachText: string): any {
   if(!employees)
    return [];
    if(!serachText)
    return employees;

    serachText=serachText.toLocaleLowerCase();
    return employees.filter(emp=>{
      const firstName = emp.first_name.toLocaleLowerCase();
      return firstName.includes(serachText);
    });

  }
}
