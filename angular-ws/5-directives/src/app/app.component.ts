import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;

  cities=['New York', 'San Francisco',  'Los Angeles', 'Chicago', 'Detroit']
  buttons=['OK', 'Cancel', 'Edit', 'Delete', 'Save', 'Restart', 'Disable']

checkStatus(s1: any) {
  console.log(s1.target.checked);
  this.isVisible = s1.target.checked;
}

   


}
