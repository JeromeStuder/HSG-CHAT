import { Component, OnInit,Input } from '@angular/core';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /*private _name='';
  @Input()
  set name(name: string){
    this._name = (name&&name.trim())||'UNISG-CHAT';
  }
  get name(): string{return this._name;}
  */
  header = 'Herzlich Willkommen zum UNISG-CHAT';
  headerMobile ='UNISG-CHAT'
  logo={
    'src':'assets/logo_de.jpg',
    'alt':'UNISG-Logo'
  }
  logoMobile={
    'src':'assets/logo-mobile.png',
    'alt':'UNISG-Logo'
  }

  public logout():void{
    var r = confirm('Bist du sicher, dass du gehen möchtest?');
    if (r==true) {
      window.location.href="https://www.google.ch";
    }
  }
  constructor() { }

  ngOnInit() {
    
  }

}
