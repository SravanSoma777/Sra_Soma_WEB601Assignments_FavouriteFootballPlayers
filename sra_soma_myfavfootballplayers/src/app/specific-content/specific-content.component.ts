import { Component,OnInit } from '@angular/core';
import { PlayerserviceService } from '../playerservice.service';
import { Content } from "../helper-files/content-interface";
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-specific-content',
  templateUrl: './specific-content.component.html',
  styleUrls: ['./specific-content.component.scss']
})
export class SpecificContentComponent implements OnInit {


  contentId: number;
  contentItem: Content | undefined;

  constructor(private route: ActivatedRoute, private playerservice : PlayerserviceService, private messageservice:MessageService) {
    this.contentId = this.route.snapshot.params['id'];
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerservice.getContentById(id).subscribe(item => {
      this.contentItem = item;
      this.messageservice.add("Showing Content of Id " +id +" and Title "+this.contentItem.title)
    });
  }
}
