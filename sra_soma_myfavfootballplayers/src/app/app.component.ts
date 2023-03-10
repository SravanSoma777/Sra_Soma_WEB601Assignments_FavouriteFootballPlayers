import { Component } from '@angular/core';
import { PlayerserviceService } from './playerservice.service';
import { MessageService } from './message.service';
import { CONTENT } from './helper-files/contentDb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // id!: number;
  constructor(){}//private playerservice: PlayerserviceService,
   // private messageservice: MessageService){}

    /* getFootballPlayer() {

      if (isNaN(this.id)) {
        this.messageservice.add('Please enter a valid number.');
        return;
      }
      
      const contentCardArrayLength = this.playerservice.getcontentCardArrayLength();
      if (this.id < 0 || this.id >= contentCardArrayLength) {
        this.messageservice.add('The entered id number is outside the bounds of the ContentCard array.');
        return;
      }

      try {
        const contentCard = this.playerservice.getFootballPlayer(this.id);
        this.messageservice.add(contentCard);
      } catch (error) {
        this.messageservice.add('An error occurred: ' + error.message);
      }
    }
}
*/
}