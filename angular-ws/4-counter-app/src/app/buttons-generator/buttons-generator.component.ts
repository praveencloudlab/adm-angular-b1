import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-generator',
  templateUrl: './buttons-generator.component.html'
})
export class ButtonsGeneratorComponent {
  hitsCount =0
  @Input()
  btnLabel:any;
  @Output()
  hitsTotalCount=new EventEmitter()

buttonHitsCount() {
  this.hitsCount = this.hitsCount + 1
  this.hitsTotalCount.emit(this.btnLabel)
}
resetHitsCount() {
  this.hitsCount = 0;
}
  


}
