import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';
/* import { ContentList } from '../helper-files/content-list'; */
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit  {
 
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
    },
    {
    id:2,
    title:"Lionel Messi",
    description:"Argentinian football player",
    creator:"Sravan Reddy soma",
    imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
    type:"AM",
    tags:["Leo", "Messi"]
    }
    
}
ngOnInit(): void {
  

}
imageText() {
  console.log("Image Url: " + this.content.imgURL + "Image Title:" + this.content.title);
}
  /* filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';

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
    type:"AM",
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
    type:"AM",
    tags:["Leo", "Argentina"]
  };
  contentItem6:Content = {
    id: 6,
      title:"Neymar Jr",
      description:"Football Player",
      creator:"Sravan Reddy Soma",
      imgURL:"https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=original",
      type:"Winger",
      tags:["Neymar", "Brazil"]
  };
  contentItem7:Content = {
    id: 7,
    title:"Cristiano Ronaldo",
    description:"Football Player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
    type:"Striker",
    tags:["Cristiano", "Ronaldo"]
  };
  contentItem8:Content = {
    id: 8,
    title:"Lionel Messi",
    description:"Football Player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
    type:"AM",
    tags:["Leo", "Argentina"]
  };


 contentArray: Content[];
  
 constructor(){
   /*  this.myFootballPlayers.addContent(this.footballPlayer);
    this.myFootballPlayers.addContent(this.footballPlayer2);
    this.myFootballPlayers.addContent(this.footballPlayer3); */
   /*  this.contentArray = [this.contentItem]; */
    /*  this.contentArray.push(this.contentItem); */
    /*  this.contentArray.push(this.contentItem2);
     this.contentArray.push(this.contentItem3);
     this.contentArray.push(this.contentItem4);
     this.contentArray.push(this.contentItem5);
     this.contentArray.push(this.contentItem6);
     this.contentArray.push(this.contentItem7);
     this.contentArray.push(this.contentItem8);
  } */

 /*  search() {
    const content = this.contentArray.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  } */

 /* ngOnInit():void{
   /*  const card = document.getElementById('footballPlayers');
    console.log(card);
    if(card){
      card.innerHTML += this.myFootballPlayers.printProperties(0);
      card.innerHTML += this.myFootballPlayers.printProperties(1);
      card.innerHTML += this.myFootballPlayers.printProperties(2);
    } */
  }  

