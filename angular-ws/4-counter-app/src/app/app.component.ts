import { Component,QueryList, ViewChildren  } from '@angular/core';
import { ButtonsGeneratorComponent } from './buttons-generator/buttons-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  /** 
   * 1. @ViewChildren: This decorator is imported from @angular/core and is used to declare that we want to query for child components or elements.
   * 2. (ButtonsGeneratorComponent): This parameter specifies the type of component or element we want to query for. In this case, it is ButtonsGeneratorComponent, indicating that we want to query for instances of the ButtonsGeneratorComponent.
   * 3. !: QueryList<ButtonsGeneratorComponent>: This part defines the type of the childComponents property. QueryList is an Angular class that represents a collection of items resulting from the query. In this case, it will hold instances of the ButtonsGeneratorComponent.
   * 4. childComponents: This is the property name where we store the reference to the queried instances. It is a public property defined in the AppComponent class.
   * 5. With the @ViewChildren decorator, the childComponents property will be populated with a QueryList of ButtonsGeneratorComponent instances that match the specified selector (ButtonsGeneratorComponent) in the template of the AppComponent.
   * 6. By using the childComponents property, you can access and interact with the child components directly in the parent component. For example, you can call methods, access properties, or iterate over the child components as demonstrated in the resetAllHits() method.
   * 7. this.totalHitsCount=0 resets the totalHitsCount to 0 in the AppComponent.

   */
  @ViewChildren(ButtonsGeneratorComponent) childComponents!: QueryList<ButtonsGeneratorComponent>;

resetAllHits() {
  this.childComponents.forEach(childComponent => childComponent.resetHitsCount());
  this.totalHitsCount=0
}

  totalHitsCount=0
calculateHitsTotalCount(btnLabel: any) {
  this.totalHitsCount=this.totalHitsCount+btnLabel;
}
hitsCount=0
countHits() {
  this.hitsCount++;
}
 counter=1


  numbers=[5,10,15,20,-5,-10, -15, -20,30];

}
