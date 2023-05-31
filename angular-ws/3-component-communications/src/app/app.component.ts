import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message='';
  childMsg=''
sendMessageToChild(msg: string) {
  this.message=msg
}

  messageFromChild(msg: any) {
    this.childMsg=msg;    
  }
  
}
