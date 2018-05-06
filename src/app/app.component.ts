import { Component,EventEmitter, Input, Output, Directive, ViewContainerRef} from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private chat: ChatService){ }


  public userName='';
  public userMessage='';
  public logOff:string = 'logoutFalse';

  public getUserName(inputString):void{
    this.userName = inputString.trim();
    this.logOff='logoutFalse';
  }
  public getMessage(messageString){
    if(this.userMessage==messageString){
      this.chat.sendMsg(messageString, this.userName);
      this.userMessage='%5%7%&_'+messageString;
    }else{
      this.userMessage = messageString;
      this.chat.sendMsg(messageString, this.userName);
    }
  }
  public clearMessageFunc(messageID):void{
   
  }
  public getLoginWindow(string):void{
    this.logOff=string;
    if(string=='logoutTrue'){
      this.userName = '';
    }
  }
}
