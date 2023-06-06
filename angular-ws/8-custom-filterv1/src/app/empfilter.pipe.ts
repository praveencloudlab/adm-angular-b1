import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'empfilter'
})
export class EmpfilterPipe implements PipeTransform {

  transform(employees: any[], property:string,serachText: string): any {
   console.log(property);
   
    if(!employees || !property || !serachText){
      return employees;
    }

    return employees.filter(emp=>emp[property].toLowerCase().includes(serachText.toLowerCase()));
   
   

  }
}
