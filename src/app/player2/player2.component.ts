import { Component } from '@angular/core';
import { Play } from '../play';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component {
  constructor(private ss:SharedService){}
  boardP2=this.ss.getBoard();
  play(){

  }
}
