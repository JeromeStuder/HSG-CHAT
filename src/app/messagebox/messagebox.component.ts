import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {
  public chatMessage: string;
  public messageToSend: string;
  public userName: string;

  constructor() { 

  }
  innerHeight: any;
  innerWidth: any;
  loginText = 'Bitte Nickname eingeben';
  sendText ='Weg damit';
  
  public showMessage():void{
    this.messageToSend = this.chatMessage;
    this.chatMessage = '';
    alert('Danke'+this.userName+'du hast folgendes eingegeben:'+ this.messageToSend);
  }

  public setName():void{
    if(this.userName!=''){
      document.getElementById('overlayLogin').style.visibility = 'hidden';
    }else{
      alert('Enter useranme');
    }
  }




  ngOnInit() {
  }

}
