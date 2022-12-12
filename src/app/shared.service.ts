import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private myMethodSubject = new Subject<any[]>();
  myObs=this.myMethodSubject.asObservable();

  constructor() {}
  
     p1_element:any
     p2_element:any
     cell_elements:any

     p1=0
     p2=0

  myMethod(p1_el:any,p2_el:any,cell_el:any){
    // this.myMethodSubject.next(p1_element);
    // this.myMethodSubject.next(p2_element);
    // this.myMethodSubject.next(cell_el);
    this.p1_element=p1_el;
    this.p2_element=p2_el;
    this.cell_elements=cell_el;
  }
  // setElements(){

  // }

  // mySub(){
  //   this.myObs.subscribe((d)=>{
  //     this.p1_element=d[0];
  //     this.p2_element=d[1];
  //   })
  // }
  setP1P2(p1:number,p2:number){
    this.p1=p1;
    this.p2=p2;
    this.myMethodSubject.next([p1,p2]);
    //console.log(this.p1,this.p2)

    // this.p1_element=p1_el;
    // this.p2_element=p2_el;
    // this.cell_elements=cell_el;
  }

  getP1(){ return this.p1}
  getP2(){ return this.p2}
  getP1Element(){ return this.p1_element;}
  getP2Element(){ return this.p2_element;}
  getcells(){ return this.cell_elements;}

  player1Or2=true;
  board = [  //0=normal, 1=ladder, 2=snake
    0,0,1,0,0,0,0,0,0,0,
    0,0,0,0,0,1,0,0,0,0,
    0,0,0,1,2,0,0,0,0,2,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,1,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,2,0,0,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    2,0,0,0,0,0,0,2,0,0
  ]
  snake = {
    29:7, 24:12, 71:36, 90:54, 97:78
  }
  ladder ={
    2:13, 15:37, 23:41, 48:86, 74:95
  }
  getBoard(){
    return this.board;
  }
  getSnake(){
    return this.snake;
  }
  getLadder(){
    return this.ladder;
  }
  // p1 = 0;
  // p2 = 0;
  // p1_chance = false;
  // p2_chance = true;
  // roll() {
  //   this.p1_chance = !this.p1_chance;
  //   this.p2_chance = !this.p2_chance;
  //   let id = Math.floor(Math.random() * 6) + 1;
  //   if (this.p1_chance) {
  //     this.p1 += id;
  //     this.p1 %= 100;
  //   } else {
  //     this.p2 += id;
  //     this.p2 %= 100;
  //   }
  //   let p1_element=document.getElementById(this.p1 + '')
  //   let p2_element=document.getElementById(this.p2 + '')
  //   let cell_el=document.querySelectorAll('.cell')

  //  for(var i= 0;i<cell_el.length;i++){
  //    document.getElementById(cell_el[i].innerHTML)!.style.backgroundColor='white'
  //  }

  //   if(this.p1) p1_element!.style.backgroundColor = 'red';
  //   if(this.p2) p2_element!.style.backgroundColor = 'blue';
  //   if(this.p1==this.p2) p1_element!.style.backgroundColor = 'orange';
  //   console.log(id, this.p1, this.p2, this.p1_chance, this.p2_chance);
  //   // console.log(id,this.index)
  // }

}
