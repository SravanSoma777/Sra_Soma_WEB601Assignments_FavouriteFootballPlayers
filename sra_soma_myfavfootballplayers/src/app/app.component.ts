import { Component , OnInit} from '@angular/core';
import { PlayerserviceService } from './playerservice.service';
import { MessageService } from './message.service';
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //playerId!: number;
  
  constructor(private playerservice: PlayerserviceService,private messageservice: MessageService ,private router: Router, private logService: LogUpdateService){}

    ngOnInit():void {
      const id = 8;
      this.logService.init();
    }
    navigateToList() {
      this.router.navigate(['/list']);
    }
  
  
}
