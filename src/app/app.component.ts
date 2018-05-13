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
    this.chat.sendMsg('hat den Chat betreten', this.userName)
    this.logOff='logoutFalse';
  }
  //FUnktion wenn User Nachricht eingegeben hat und auf Enter gedrückt hat
  public getMessage(messageString){
    messageString = messageString.trim();
    if(messageString!=''&&messageString!='\n'){
      if(this.userMessage==messageString){
        //Nachricht an chat.service.ts
        this.chat.sendMsg(messageString, this.userName);
        //Nachricht an content.component.ts
        this.userMessage='%5%7%&_'+messageString;
      }else{
        this.userMessage = messageString;
        this.chat.sendMsg(messageString, this.userName);
      }
    }
  }
  public clearMessageFunc(messageID):void{
   
  }
  public getLoginWindow(string):void{
    this.logOff=string;
    if(string=='logoutTrue'){
      this.chat.sendMsg('hat den Chat verlassen', this.userName)
      this.userName = '';
    }
  }
}
