import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {
  public chatMessage: string;

  constructor() { }

  sendText ='Weg damit';
  
  public showMessage():void{
    alert(this.chatMessage);
    this.chatMessage = '';
  }


  ngOnInit() {
  }

}
