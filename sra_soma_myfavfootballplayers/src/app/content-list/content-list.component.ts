import { Component , Input , OnInit } from '@angular/core';
import { ContentFilterPipe } from '../content-filter.pipe';
import { Content } from '../helper-files/content-interface';
import { PlayerserviceService } from '../playerservice.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {


  contentList : Content[];

  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';
  static highestId: 0;

 constructor(private playerservice: PlayerserviceService, private route: ActivatedRoute ){

  
  this.contentList= [];
  this.route.params.subscribe(params => {
    const id = params['id'];
  })
  } 

  search() {
    const content = this.contentList.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }

  ngOnInit(){

    /* this.playerservice.getFootballPlayers().subscribe(content=> this.content = content);
    this.playerservice.getSpecificPlayer(1).subscribe((player: Content[]) => this.player = player); */
    this.playerservice.getContent().subscribe(content => this.contentList = content);
    
  } 

  addNewContent(newContent:any){
    this.contentList.push(newContent);
    this.contentList = [...this.contentList];
   // console.log(`Content Added Successfully : ${newContent.Title}`)
    
   }

   addContentToList(newContentItem: Content) : void {
    /* this.playerservice.addContent(newContentItem).subscribe(newContentItem =>
    this.contentList.push(newContentItem)); */
    this.playerservice.getContent().subscribe(content =>this.contentList = content)
    console.log(`Content added succesfully : ${newContentItem.title}`);
    console.log(newContentItem);
    
    }

  updateContentInList(contentItem: Content): void {
      this.playerservice.updateContent(contentItem)
      .subscribe(() =>
      console.log("Content updated successfully")
    );
    } 
}
