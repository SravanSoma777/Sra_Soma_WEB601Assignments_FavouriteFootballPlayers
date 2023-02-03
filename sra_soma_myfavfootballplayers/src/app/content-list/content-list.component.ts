import { style } from '@angular/animations';
import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  @Input() content: Content;
  constructor() {
    this.content = {
      id: 1,
      title:"Cristiano Ronaldo",
      description:"Football Player",
      creator:"Sravan Reddy Soma",
      imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
      type:"Striker",
      tags:["Cristiano", "Ronaldo"]
    };

    
}
ngOnInit(): void {
  

}
imageText() {
  console.log("Image Url: " + this.content.imgURL + "Image Title:" + this.content.title);
}
}