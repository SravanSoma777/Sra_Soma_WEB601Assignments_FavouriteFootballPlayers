import { Component } from '@angular/core';
import { PlayerserviceService } from './playerservice.service';
import { MessageService } from './message.service';
import { Router } from "@angular/router";
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //playerId!: number;
  
  constructor(private playerservice: PlayerserviceService,private messageservice: MessageService ,private router: Router){}

   /*   getClickedPlayer(playerId:number) {

      if (isNaN(this.playerId)) {
        this.messageservice.add('Please enter a valid number.');
        return;
      }
      
      const contentCardArrayLength = this.playerservice.getcontentCardArrayLength();
      if (this.playerId < 0 || this.playerId >= contentCardArrayLength) {
        this.messageservice.add('The entered id number is outside the bounds of the ContentCard array.');
        return;
      }

       

       try {
        const ClickedCard = this.playerservice.getClickedPlayerCard(playerId);
        this.messageservice.add("Content card Retrieved"+ClickedCard);
        return;
        
      } catch (error) {
        this.messageservice.add('An error occurred: ');
      }
    }  */
    ngOnInit() {
      const id = 8;
    }
    navigateToList() {
      this.router.navigate(['/list']);
    }
  
  
}
