import { EventEmitter, Component, OnInit,Input, Output } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { MessageboxComponent }  from '../messagebox/messagebox.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})



export class HeaderComponent implements OnInit {

  @Input() headerUserNameInput:string;
  @Output() logoutHeaderCommand = new EventEmitter();
  header = 'Herzlich Willkommen zum UNISG-CHAT';
  headerMobile ='UNISG-CHAT';
  
  logo={
    'src':'assets/logo_de.jpg',
    'alt':'UNISG-Logo'
  }
  
  logoMobile={
    'src':'assets/logo-mobile.png',
    'alt':'UNISG-Logo'
  }
  constructor() { }
  //Führt die Logout funktion aus, setzt den headerUserNameInput auf null, damit kein name angezeigt wird und 
  //schickt den befehl logoutHeaderCommand an app.component.ts, diesr wird 
  public logout():void{
    if (confirm(this.headerUserNameInput+ ' bist du sicher, dass du gehen willst?')) {
      this.logoutHeaderCommand.emit('true');
      this.headerUserNameInput='';
    }
  }
  ngOnInit() {
    
  }

}
