import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';




@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = this.CONTENT;
    return {content};
  }
  /* genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c =>
    c.id)) + 1 : 2000;
    } */

   

  CONTENT:Content[]=[
  {
     id: 0,
       title:"Cristiano Ronaldo",
       description:"Football Player",
       creator:"Sravan Reddy Soma",
       imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
       type:"Striker",
       tags:["Cristiano", "Portugal"]
   },
    {
     id: 1,
     title:"Lionel messi",
     description:"Football Player",
     creator:"Sravan Reddy Soma",
     imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
     type:"AM",
     tags:["Leo", "Argentina"]
   },
   {
     id: 2,
       title:"Neymar Jr",
       description:"Football Player",
       creator:"Sravan Reddy Soma",
       imgURL:"https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=original",
       type:"Winger",
       tags:["Neymar", "Brazil"]
   },
   {
     id: 3,
     title:"Cristiano Ronaldo",
     description:"Football Player",
     creator:"Sravan Reddy Soma",
 /*     imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
  */    type:"Striker",
     tags:["Cristiano", "Ronaldo"]
   },
   {
     id: 4,
     title:"Lionel Messi",
     description:"Football Player",
     creator:"Sravan Reddy Soma",
 /*     imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
  */    type:"AM",
     tags:["Leo", "Argentina"]
   },
   {
     id: 5,
       title:"Neymar Jr",
       description:"Football Player",
       creator:"Sravan Reddy Soma",
 /*       imgURL:"https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=original",
  */      type:"Winger",
       tags:["Neymar", "Brazil"]
   },
    {
     id: 6,
     title:"Cristiano Ronaldo",
     description:"Football Player",
     creator:"Sravan Reddy Soma",
     imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
     type:"Striker",
     tags:["Cristiano", "Ronaldo"]
   },
    {
     id: 7,
     title:"Lionel Messi",
     description:"Football Player",
     creator:"Sravan Reddy Soma",
     imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
     type:"AM",
     tags:["Leo", "Argentina"]
   }
 ];
}
