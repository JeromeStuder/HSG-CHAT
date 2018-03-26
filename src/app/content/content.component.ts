import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  backgroundImg = 'assets/BackgroundStripes.png';

  KursInformation = 'Herzlich Willkommen! Diese Applikation wurde im Rahmen des Kurses "Professionelle Entwicklung von Webapplikationen (4,652,1.00)" entwickelt';

  user1 = 'Fritz';
  user2 = 'Elisabeth';

  ngOnInit() {
  }

}
