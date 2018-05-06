import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as RX from 'rxjs/RX';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {
  //conection
  private socket;

  constructor() { }

  connect(): RX.Subject<MessageEvent>{
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    this.socket = io('http://s3-chat.a3c1.starter-us-west-1.openshiftapps.com');

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server")
          observer.next(data);
        })
        return () => {
          this.socket.disconnect();
        }
    });
    
    // We define our Observer which will listen to messages
    // from our other components and send messages back to our
    // socket server whenever the `next()` method is called.
    let observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return RX.Subject.create(observer, observable);
  }
}
