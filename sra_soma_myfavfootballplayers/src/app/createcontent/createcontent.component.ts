import { Component,EventEmitter,Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-createcontent',
  templateUrl: './createcontent.component.html',
  styleUrls: ['./createcontent.component.scss']
})
export class CreatecontentComponent {

  /* @Output() contentCreated = new EventEmitter<Content>();
  newContent : any = {};
  errorMessage:any;
  
  
  createContent(){
      this.contentCreated.emit(this.newContent)
      this.newContent = {}
  };

  
  
}
 */
@Output() contentCreated = new EventEmitter<any>();
 
  id!:string;
  title!: string;
  creator!: string;
  description!: string;
  type!: string;
  tags!: string;
  imgURL!: string;
  errorMessage!: string;

  constructor() { }

  ngOnInit() {
  
  }
  createContent() {
    return new Promise((success, fail) => {
      if (!this.description || !this.title || !this.creator) {
        fail('The Title,Description and Creator are Required ');
        return;
      }
      const newContent = {
        id: this.id,
        title: this.title,
        author: this.creator,
        body: this.description,
        type: this.type,
        imgUrl: this.imgURL,
        tags: [this.tags]
      };
      this.contentCreated.emit(newContent);
      success('Content successfully added Title: ' + newContent.title);
    }).then(successMessage => {
      console.log(successMessage)
      this.title = '';
      this.description = '';
      this.creator = '';
      this.type = '';
      this.imgURL = '';
      this.tags = '';
      this.errorMessage = '';
    })
      .catch(failMessage => {
        this.errorMessage = 'Content failed to be added! ' + failMessage;
      });
  }

}