import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  size=10
  cells = new Array(this.size * this.size);

  constructor(private ss:SharedService){
  //   console.log(this.getP1(this.ss.getP1()))
  //  this.ss.myMethod(this.getP1(this.ss.getP1()),this.getP2(this.ss.getP2()),this.getCells());
   }
  ngOnInit(): void {
    console.log(document)
    this.ss.myObs.subscribe((d)=>{ // calls everytime next triggers
      //console.log("on init");
      this.ss.myMethod(this.getP1(d[0]),this.getP2(d[1]),this.getCells());
    })
    // console.log("on init")
  }
  
 getP1(p1:number){
  return document.getElementById(p1 + '')
 }
 getP2(p2:number){
  return document.getElementById(p2 + '')
 }
 getCells(){
  return document.querySelectorAll('.cell')
 }
}
