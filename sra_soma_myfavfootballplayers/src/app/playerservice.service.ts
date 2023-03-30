import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap, timer } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ContentListComponent } from './content-list/content-list.component';
import { switchMap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {
 // getcontentCardArrayLength: any;
  private contentUrl = 'api/content';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };
  
  constructor(private messageservice: MessageService,private  http: HttpClient) {
   }

  
  
 /*  getFootballPlayers(): Observable<Content[]> {
    const players = of()
    this.messageservice.add('content array loaded!');
    return players;
  }
  getSpecificPlayer(id : number): Observable<Content[]>{
    const player = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(player)
  }


  getClickedPlayerCard(playerId:number) {
    const Clickedplayer = Content.filter(obj => obj.id == playerId);
    this.messageservice.add("Player Card Retrieved at id" + playerId)
    return of(Clickedplayer)
  } */

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>(this.contentUrl);
    
  }

   /* getContentById(id: number): Observable<Content> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Content>(url).pipe(
      tap((_) => this.log(`Fetched content at id=${id}`)),
      catchError(this.handleError<Content>(`getContentById id=${id}`))
    );
  }  */
 

  addContent(newContentItem: Content): Observable<Content> {
   // newContentItem.id = ++this.highestId;
    return this.http.post<Content>(this.contentUrl, newContentItem, this.httpOptions)
    .pipe(
      tap(() => {
        this.messageservice.add('Content added successfully');
      })
    );
  }
  
  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem,
    this.httpOptions);
  } 



  

   

 
}
