import { Component } from '@angular/core';
import { PlayerserviceService } from './playerservice.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  idNum!: number;
  
  constructor(private playerservice: PlayerserviceService,private messageservice: MessageService){}

     getClickedPlayer(idNum:number) {

      if (isNaN(this.idNum)) {
        this.messageservice.add('Please enter a valid number.');
        return;
      }
      
      const contentCardArrayLength = this.playerservice.getcontentCardArrayLength();
      if (this.idNum < 0 || this.idNum >= contentCardArrayLength) {
        this.messageservice.add('The entered id number is outside the bounds of the ContentCard array.');
        return;
      }

       

       try {
        const ClickedCard = this.playerservice.getClickedPlayerCard(idNum);
        this.messageservice.add("Added content of Id" + idNum);
        return (ClickedCard)
        
      } catch (error) {
        this.messageservice.add('An error occurred: ');
      }
    } 
}
