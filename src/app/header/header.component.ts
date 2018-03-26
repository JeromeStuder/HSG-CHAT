import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit() {
    
  }

}
