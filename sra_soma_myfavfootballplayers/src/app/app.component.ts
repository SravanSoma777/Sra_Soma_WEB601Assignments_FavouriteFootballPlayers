import { Component , OnInit, inject} from '@angular/core';
import { PlayerserviceService } from './playerservice.service';
import { MessageService } from './message.service';
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { LogUpdateService } from './log-update.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //playerId!: number;
  snackBarRef = inject(MatSnackBarRef);
  constructor(private playerservice: PlayerserviceService,private messageservice: MessageService ,private router: Router, private logService: LogUpdateService,private _snackBar: MatSnackBar){}

    ngOnInit():void {
      const id = 8;
      //this.logService.init();
    }
    navigateToList() {
      this.router.navigate(['/list']);
    }
    openSnackBar() {
      this.logService.checkForUpdates();
    }
    
    }
  
