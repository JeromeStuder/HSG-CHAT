import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ChatService } from './../chat.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  //Counter für nachrichten
  public countMessage = 0;
  public countForeingMessage = 0;
  //
  public message;
  //Username 
  public userName;
  //Verschiedene Farben
  constructor(
    private chatReceive:ChatService) {
  
    this.innerHeight = (window.innerHeight)-250;
    this.innerWidth = (window.innerWidth);
    if(this.innerWidth>765){
      this.innerHeight -=50;
    }
    this.countMessage = 1;
    }
  
  
  public COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#4ae8c4', '#3b88eb',
    '#3824aa', '#a700ff', '#d300e7', '#633974',
    '#A04000', '#F0B27A', '#CD6155', '#2E4053'
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
  //
  //
  //Löscht sämtliche Nachrichten des Inputs
  //
  //
  @Input() set ClearCommand(command:string){
    if(command=='logoutTrue'){
      document.getElementById('chatGoesHere').innerHTML = '';
    }
  }
//Nickname für Nachricht 
  @Input() set getNicknameMessagecontent(nicknameGet:string){
    this.userName = nicknameGet;
  }

  //Zeigt NACHRICHT AN von mir selber
  @Input() set setMessageUserInput(value){
    if(value.trim()!=''){
      //Test ob user die Datei mehrmals angeschaut hat
      var substring=/%5%7%&_/;
      if(value.match(substring)){
        value = value.substr(7); //Erste sieben zeichen werden abgeschnitte, da dies gleich %5%7%&_ ist
      }
      //Die variabeln für die DIV's vorbereiten
      var createBubbleElement;
      var createMessageElement;
      var createTextElement;
      var createUsernameElement;
      //Die ID's für die Div's erstellen
      var addID = 'ownMessage_'+this.countMessage;
      var addMessageId='feldOwnMessage_'+this.countMessage;
      var ownNickname = this.userName+'_'+this.countMessage;
      var ownMessage ='myMessageText_'+this.countMessage; 
      //HTML DIV erstellen für die Bubble
      createBubbleElement = document.createElement('div');
      //neuer Bubble die klass und die id übergeben
      createBubbleElement.className = 'bubble';
      createBubbleElement.id = addID;
      //
      //
      //das neue Div mit der id ownMessage_XX dem div chatGoesHere AM ENDE hinzufügen
      //
      //
      document.getElementById('chatGoesHere').appendChild(createBubbleElement);
      //die Angularstylekomponente dem div Bubble hinzufügen
      document.getElementById(addID).setAttribute('_ngcontent-c2','');
      //Das Div für die Nachriht erstellen 
      createMessageElement = document.createElement('div');
      //Dem Div die Klasse und die ID geben
      createMessageElement.className= 'chat_myself';
      createMessageElement.id = addMessageId;
      //das Div chat_myself der Bubble hinzufügnen
      document.getElementById(addID).appendChild(createMessageElement);
      //Dem div die Stylekomponente übergebene
      document.getElementById(addMessageId).setAttribute('_ngcontent-c2','');
      //Die DIV's für die TextMessage und den Username erstellen
      createTextElement = document.createElement('div');
      createTextElement.id = ownMessage;
      createUsernameElement = document.createElement('div');
      createUsernameElement.className = 'chat_myself_username';
      createUsernameElement.id = ownNickname;
      //Die beiden divs innerhalb des Messagecontents hinzufügen
      //ZUERST USERNAME DANN MESSAGE
      document.getElementById(addMessageId).appendChild(createUsernameElement);
      document.getElementById(addMessageId).appendChild(createTextElement);
      document.getElementById(ownMessage).setAttribute('_ngconten-c2','');
      document.getElementById(ownMessage).setAttribute('style','word-wrap: break-word;')
      document.getElementById(ownNickname).setAttribute('_ngcontent-c2','');
      var widthUsername = document.getElementById(ownNickname).offsetWidth;
      if(value.length>20){
        var contentWindowWidth = 370 - widthUsername;
        document.getElementById(ownMessage).style.width = contentWindowWidth+"px";
      }
      //Die Chatnachricht vorbereiten um in das DIV chat_myself einzufügen
      this.message = document.createTextNode(value);
      //
      //ZEIT ANZEIGEN
      //
      const d: Date = new Date();
      var hours = d.getHours();
      var hour;
      if(hours<10){
        hour = '0'+hours.toString();
      }else{
        hour = hours.toString();
      }
      var minutes = d.getMinutes();
      var minute;
      if(minutes<10){
        minute = '0'+minutes.toString();
      }else{
        minute = minutes.toString();
      }
      //Dem Div chat_myself die Nachticht einfügen 
      document.getElementById(ownMessage).appendChild(this.message);
      document.getElementById(ownNickname).innerHTML = this.userName+'<p>'+hour+":"+minute;
       //Den Counter der eigenen Nachricht erhöhen, damit die nächste Nachricht wieder eine
      //unique identification hat
      this.countMessage++;
      //Zum ende der nachricht scrollen
      document.getElementById('chatGoesHere').scrollTop = document.getElementById('chatGoesHere').scrollHeight;
 
    }else{
    }
  }
    
  innerHeight:any;
  innerWidth:any;

    
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.chatReceive.messages.subscribe(msgJSON => {
      var msg = JSON.parse(msgJSON);
      console.log(msgJSON);
      //console.log(msg);
      //Die variabeln für die DIV's vorbereiten
    var createBubbleElement;
    var createMessageElement;
    var createTextElement;
    var createUsernameElement;
    //Die ID's für die Div's erstellen
    var addIDF = 'Message_'+this.countForeingMessage;
    var addMessageId='feldMessage_'+this.countForeingMessage;
    var Nickname = msg.username+'_'+this.countForeingMessage;
    var Message ='foreignMessageText_'+this.countForeingMessage; 
    //HTML DIV erstellen für die Bubble
    createBubbleElement = document.createElement('div');
    //neuer Bubble die klass und die id übergeben
    createBubbleElement.className = 'bubble';
    createBubbleElement.id = addIDF;
    //
    //
    //das neue Div mit der id ownMessage_XX dem div chatGoesHere AM ENDE hinzufügen
    //
    //
    document.getElementById('chatGoesHere').appendChild(createBubbleElement);
    //die Angularstylekomponente dem div Bubble hinzufügen
    document.getElementById(addIDF).setAttribute('_ngcontent-c2','');
    //Das Div für die Nachriht erstellen 
    createMessageElement = document.createElement('div');
    //Dem Div die Klasse und die ID geben
    createMessageElement.className= 'chat_receive';
    createMessageElement.id = addMessageId;
    //das Div chat_myself der Bubble hinzufügnen
    document.getElementById(addIDF).appendChild(createMessageElement);
    //Dem div die Stylekomponente übergebene
    document.getElementById(addMessageId).setAttribute('_ngcontent-c2','');
    //Die DIV's für die TextMessage und den Username erstellen
    createTextElement = document.createElement('div');
    createTextElement.id = Message;
    createUsernameElement = document.createElement('div');
    createUsernameElement.className = 'chat_receive_username';
    var colorcode = this.getUsernameColor(msg.username);
    createUsernameElement.id = Nickname;
    //Die beiden divs innerhalb des Messagecontents hinzufügen
    //ZUERST USERNAME DANN MESSAGE
    document.getElementById(addMessageId).appendChild(createUsernameElement);
    document.getElementById(addMessageId).appendChild(createTextElement);
    document.getElementById(Message).setAttribute('_ngconten-c2','');
    document.getElementById(Message).setAttribute('style','word-wrap: break-word;');
    document.getElementById(Nickname).setAttribute('_ngcontent-c2','');
    document.getElementById(Nickname).setAttribute('style','color:'+colorcode+';');
    var widthUsername = document.getElementById(Nickname).offsetWidth;

    //Die Chatnachricht vorbereiten um in das DIV chat_myself einzufügen
    var messageReceive = document.createTextNode(msg.message);
    //
      //ZEIT ANZEIGEN
      //
      const d: Date = new Date();
      var hours = d.getHours();
      var hour;
      if(hours<10){
        hour = '0'+hours.toString();
      }else{
        hour = hours.toString();
      }
      var minutes = d.getMinutes();
      var minute;
      if(minutes<10){
        minute = '0'+minutes.toString();
      }else{
        minute = minutes.toString();
      }
      //Dem Div chat_myself die Nachticht einfügen 
      document.getElementById(Message).appendChild(messageReceive);
      document.getElementById(Nickname).innerHTML = msg.username+'<p>'+hour+":"+minute;
       //Den Counter der eigenen Nachricht erhöhen, damit die nächste Nachricht wieder eine
      //unique identification hat
      this.countForeingMessage++;
      //Zum ende der nachricht scrollen
      document.getElementById('chatGoesHere').scrollTop = document.getElementById('chatGoesHere').scrollHeight;
      //Befehl, damit sämtliche Nachrichten gelöscht werden
      //this.clearMessage.emit('clear');
    })
  }

  public writeForeignChat(msg){
    
  }
  
  
  
  backgroundImg = 'assets/BackgroundStripes.png';
  KursInformation = 'Herzlich Willkommen! Diese Applikation wurde im Rahmen des Kurses "Professionelle Entwicklung von Webapplikationen (4,652,1.00)" entwickelt';


}
