import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

resetAllHits() {
    // reset all child components hits including total hits count in parent component
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
