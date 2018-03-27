import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    innerHeight:any;
    innerWidth:any;
  constructor() {
    this.innerHeight = (window.innerHeight)-250;
    this.innerWidth = (window.innerWidth);
    if(this.innerWidth>765){
      this.innerHeight -=50;
    }
  }
  backgroundImg = 'assets/BackgroundStripes.png';
  KursInformation = 'Herzlich Willkommen! Diese Applikation wurde im Rahmen des Kurses "Professionelle Entwicklung von Webapplikationen (4,652,1.00)" entwickelt';

  user1 = 'Fritz';
  user2 = 'Elisabeth';

  ngOnInit() {
  }

}
