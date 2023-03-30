import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { PlayerserviceService } from '../playerservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  @Output() contentAdded = new EventEmitter<Content>();

  newContentItem: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
    id: null
  }

  constructor(private playerservice: PlayerserviceService) {}

  addContent(): void {
    this.playerservice
      .addContent(this.newContentItem)
      .subscribe(content  => { 
       // console.log('addContent() called emit'); 
        this.contentAdded.emit(content);
        this.newContentItem = {
          id: null,
          title: '',
          description: '',
          creator: '',
          imgURL: '',
          type: '',
          tags: [],
        };

      });

    }
  }