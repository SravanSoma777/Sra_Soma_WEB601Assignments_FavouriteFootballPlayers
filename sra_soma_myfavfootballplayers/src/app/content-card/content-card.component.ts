import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit  {

  footballPlayer: Content= {
    id:1,
    title:"Cristiano Ronaldo",
    description:"Portuguese Football player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
    type:"Striker"
  }
  footballPlayer2:Content= {
    id:2,
    title:"Lionel Messi",
    description:"Argentinian football player",
    creator:"Sravan Reddy soma",
    imgURL:"https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
    type:"Winger"
  }
  footballPlayer3:Content= {
    id:3,
    title:"Neymar Jr",
    description:"Brazilian football player",
    creator:"Sravan Reddy Soma",
    imgURL:"https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=original",
    type:"Winger"
  }

  myFootballPlayers = new ContentList(this.footballPlayer);
  contentList = this.myFootballPlayers.getitems();

  constructor(){
    this.myFootballPlayers.addContent(this.footballPlayer);
    this.myFootballPlayers.addContent(this.footballPlayer2);
    this.myFootballPlayers.addContent(this.footballPlayer3);
  }
  ngOnInit():void{
    const card = document.getElementById('footballPlayers');
    console.log(card);
    if(card){
      card.innerHTML += this.myFootballPlayers.printProperties(0);
      card.innerHTML += this.myFootballPlayers.printProperties(1);
      card.innerHTML += this.myFootballPlayers.printProperties(2);
    }
  }
}
