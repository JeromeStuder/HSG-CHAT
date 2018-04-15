import { Component,EventEmitter, Input, Output, Directive, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  userName='';
  userMessage='';
  public logOff:string = 'logoutFalse';

  @Output() sendMessageToContent = Output
  
  public getUserName(inputString):void{
    this.userName = inputString.trim();
    this.logOff='logoutFalse';
  }
  public getMessage(messageString):void{
    this.userMessage = messageString;
  }
  public clearMessageFunc(messageID):void{
    this.userMessage = '';
  }
  public getLoginWindow(string):void{
    this.logOff=string;
    if(string=='logoutTrue'){
      this.userName = '';
    }
  }
}
