import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {
  getcontentCardArrayLength: any;
  constructor(private messageservice: MessageService) { }
  
  getFootballPlayers(): Observable<Content[]> {
    const players = of(CONTENT)
    this.messageservice.add('content array loaded!');
    return players;
  }
  getSpecificPlayer(id : number): Observable<Content[]>{
    const player = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(player)
  }


  getClickedPlayerCard(idNum:number){
    const player = CONTENT.filter(obj => obj.id == idNum);
    this.messageservice.add("Player Card Retrieved at id" + idNum)
    return of(player)
  }

 
}
