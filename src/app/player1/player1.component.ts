import { Component } from '@angular/core';
import { Play } from '../play';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  constructor(private ss:SharedService){
    this.Player2.play=true;
  }
  boardArray=this.ss.getBoard();
  boardSnake=this.ss.getSnake();
  boardLadder=this.ss.getLadder();

  Player1:Play = new Play();
  Player2:Play = new Play();
 random:number=0;
  
  play(){

     if(this.Player1.win || this.Player2.win) { 
    //   alert("Player 1 Won!!!!")
       this.Player1=new Play();
       this.Player2=new Play();
     }
    //   // if (confirm("Player 1 wins!") == true) {
    //   //   text = "You pressed OK!";
    //   // } else {
    //   //   text = "You canceled!";
    //   // }
    // }
    // if(this.Player2.win) {
    //   alert("Player 1 Won!!!!")
    //   this.Player2=new Play();
    //   this.Player1=new Play();
    //   // if (confirm("Player 1 wins!") == true) {
    //   //   text = "You pressed OK!";
    //   // } else {
    //   //   text = "You canceled!";
    //   // }
    // }
    let id = Math.floor(Math.random() * 6) + 1;
    this.random=id;
    if (this.ss.player1Or2) {
      this.Player1.laddered=false;
      this.Player1.snaked=false;
      this.Player1.play=true;
      this.Player2.play=false;
      if(this.Player1.currentPos+id<=100) this.Player1.currentPos += id;
      //console.log(this.boardArray[this.Player1.currentPos]);
      if(this.boardArray[this.Player1.currentPos]==1){
        this.Player1.laddered=true;
        for(const [key, value] of Object.entries(this.boardLadder)){
          if(key==this.Player1.currentPos.toString()) this.Player1.currentPos=value
        }
      }
      if(this.boardArray[this.Player1.currentPos]==2){
        this.Player1.snaked=true;
        for(const [key, value] of Object.entries(this.boardSnake)){
          if(key==this.Player1.currentPos.toString()) this.Player1.currentPos=value
        }
      }
      if(this.Player1.currentPos==100) {
        this.Player1.win=true;
        alert("Player 1 Won!!!!")
      }
      this.Player1.currentPos %= 100;
    } else {
      this.Player2.laddered=false;
      this.Player2.snaked=false;
      this.Player1.play=false;
      this.Player2.play=true;
      if(this.Player2.currentPos+id<=100)this.Player2.currentPos += id;
      if(this.boardArray[this.Player2.currentPos]==1){
        this.Player2.laddered=true;
        for(const [key, value] of Object.entries(this.boardLadder)){
          if(key==this.Player2.currentPos.toString()) this.Player2.currentPos=value
        }
      }
      if(this.boardArray[this.Player2.currentPos]==2){
        this.Player2.snaked=true;
        for(const [key, value] of Object.entries(this.boardSnake)){
          if(key==this.Player2.currentPos.toString()) this.Player2.currentPos=value
        }
      }

      if(this.Player2.currentPos==100) {this.Player2.win=true;
        alert("Player 2 Won!!!!")
      }
      this.Player2.currentPos %= 100;
    }
    
    this.ss.setP1P2(this.Player1.currentPos,this.Player2.currentPos);
    
    let p1_element=this.ss.getP1Element();
    let p2_element=this.ss.getP2Element();
    let cell_el=this.ss.getcells();
    //console.log(p1_element,p2_element);
   for(var i= 0;i<cell_el.length;i++){
     document.getElementById(cell_el[i].innerHTML)!.style.backgroundColor='white'
   }

    if(this.Player1.currentPos!=0) p1_element!.style.backgroundColor = 'red';
    if(this.Player2.currentPos!=0) p2_element!.style.backgroundColor = 'blue';
    if(this.Player1.currentPos==this.Player2.currentPos) p1_element!.style.backgroundColor = 'orange';
   // console.log(id, this.p1, this.p2, this.ss.player1Or2);
    this.ss.player1Or2=!this.ss.player1Or2;
  }

}
