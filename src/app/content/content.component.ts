import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  public countMessage;
  public message;
  //Verschiedene Farben
  public COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];
  //Funktkion, die anhand des USernamens den Farbcode zurückgibt 
  public getUsernameColor(username):string{
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % this.COLORS.length);
    return this.COLORS[index];
  }


  @Output() clearMessage = new EventEmitter();
  
  @Input() set ClearCommand(command:string){
    if(command=='logoutTrue'){
      document.getElementById('chatGoesHere').innerHTML = '';
    }
  }
  
  @Input() set setMessageUserInput(value:string){
    if(value.trim()!=''){
      //Die variabeln für die DIV's vorbereiten
      var createBubbleElement;
      var createMessageElement;
      //Die ID's für die Div's erstellen
      var addID = 'ownMessage_'+this.countMessage;
      var addMessageId='feldMessage_'+this.countMessage;
      //HTML DIV erstellen für die Bubble
      createBubbleElement = document.createElement('div');
      //neuer Bubble die klass und die id übergeben
      createBubbleElement.className = 'bubble';
      createBubbleElement.id = addID;
      //das neue Div mit der id ownMessage_XX dem div chatGoesHere hinzufügen
      document.getElementById('chatGoesHere').appendChild(createBubbleElement);
      //die Angularstylekomponente dem div Bubble hinzufügen
      var attribute = document.getElementById(addID);
      attribute.setAttribute('_ngcontent-c2','');
      //Das Div für die Nachriht erstellen 
      createMessageElement = document.createElement('div');
      //Dem Div die Klasse und die ID geben
      createMessageElement.className= 'chat_myself';
      createMessageElement.id = addMessageId;
      //Die Chatnachricht vorbereiten um in das DIV chat_myself einzufügen
      this.message = document.createTextNode(value);
      //das Div chat_myself der Bubble hinzufügnen
      document.getElementById(addID).appendChild(createMessageElement);
      //Dem div die Stylekomponente übergebene
      var messAttribute = document.getElementById(addMessageId);
      messAttribute.setAttribute('_ngcontent-c2','');
      //Dem Div chat_myself die Nachticht einfügen 
      document.getElementById(addMessageId).appendChild(this.message);
      //Den Counter der eigenen Nachricht erhöhen, damit die nächste Nachricht wider eine
      //unique identification hat
      this.countMessage++;
      //Zum ende der nachricht scrollen
      document.getElementById('chatGoesHere').scrollTop = document.getElementById('chatGoesHere').scrollHeight;
      //Befehl, damit sämtliche Nachrichten gelöscht werden
      this.clearMessage.emit(addID);
    }
  }
    
  innerHeight:any;
  innerWidth:any;

  constructor() {
    this.innerHeight = (window.innerHeight)-250;
    this.innerWidth = (window.innerWidth);
    if(this.innerWidth>765){
      this.innerHeight -=50;
    }
    this.countMessage = 1;
    }
  backgroundImg = 'assets/BackgroundStripes.png';
  KursInformation = 'Herzlich Willkommen! Diese Applikation wurde im Rahmen des Kurses "Professionelle Entwicklung von Webapplikationen (4,652,1.00)" entwickelt';

  user1 = 'Mark';
  user2 = 'Queen Elisabeth';
  user3 = 'Anna';
  user4 = 'King Charles';

  ngOnInit() {
  }

}
