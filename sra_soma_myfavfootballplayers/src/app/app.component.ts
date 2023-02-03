import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sra_soma_myfavfootballplayers';

  contentItem:Content = {
    id: 1,
      title:"Cristiano Ronaldo",
      description:"Football Player",
      creator:"Sravan Reddy Soma",
      imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
      type:"Striker",
      tags:["Cristiano", "Portugal"]
  };
  contentItem2:Content = {
    id: 2,
    title:"Lionel messi",
    description:"Football Player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
    type:"Winger",
    tags:["Leo", "Argentina"]
  };
  contentItem3:Content = {
    id: 3,
      title:"Neymar Jr",
      description:"Football Player",
      creator:"Sravan Reddy Soma",
      imgURL:"https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=original",
      type:"Winger",
      tags:["Neymar", "Brazil"]
  };
  contentItem4:Content = {
    id: 4,
    title:"Cristiano Ronaldo",
    description:"Football Player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
    type:"Striker",
    tags:["Cristiano", "Ronaldo"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Lionel Messi",
    description:"Football Player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
    type:"Winger",
    tags:["Leo", "Argentina"]
  };
 

  contentArray: Content[];
  constructor(){
    this.contentArray = [this.contentItem];
   
    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    
  }
}
