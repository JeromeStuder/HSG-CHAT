import {Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {
  public chatMessage: string;
  public messageToSend: string;
  public userName: string;

  @Output() userNameChange = new EventEmitter();
  @Input() viewLoginWindow:string;


  constructor() { 

  }
 
  innerHeight: any;
  innerWidth: any;
  loginText = 'Bitte Nickname eingeben';
  sendText ='Weg damit';
  
  public showMessage():void{
    this.messageToSend = this.chatMessage;
    this.chatMessage = '';
    alert('Danke '+this.userName+' du hast folgendes eingegeben:'+ this.messageToSend);
  }
  //legt den usernamen fest und schickt diesen an den headercomponent, damit dieser angezeigt werden kann.
  public setName():void{
    this.userName = this.userName.trim();
    if(this.userName!=''){
      document.getElementById('overlayLogin').style.visibility = 'hidden';
      this.userNameChange.emit(this.userName);
    }else{
      alert('Enter username');
    }
  }
 
  //Wird aufgerufen, wenn im header auf Logout gedrückt wird und sich das viewLoginWindowVariable in app.components.ts ändert.
 ngOnChanges(changes: this.viewLoginWindow): void {
   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
   //Add '${implements OnChanges}' to the class.
   
 }


  ngOnInit() {
  }

}
