import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html'
})
export class GreetComponent {

sendMessageToParent(msg: string) {
  this.parentMessage.emit(msg+" too!");
}

@Output()
parentMessage= new EventEmitter()

  @Input()
  parentMsg:string=''

}
