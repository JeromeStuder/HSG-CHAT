import { Component,EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  userName='';
  public logOff:string = 'false';
  @Output() showLoginWindow = new EventEmitter();
  
  public getUserName(string):void{
    this.userName = string.trim();
  }
  public getLoginWindow(string):void{
    this.logOff = string;
    this.showLoginWindow.emit('true');
  }
}
