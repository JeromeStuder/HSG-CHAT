import { Component,EventEmitter, Input, Output, Directive, ViewContainerRef} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { RxSocket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public userName='';
  public userMessage='';
  public logOff:string = 'logoutFalse';

  public getUserName(inputString):void{
    this.userName = inputString.trim();
    this.logOff='logoutFalse';
  }
  public getMessage(messageString){
    if(this.userMessage==messageString){
      this.userMessage='%5%7%&_'+messageString;
    }else{
      this.userMessage = messageString;
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
