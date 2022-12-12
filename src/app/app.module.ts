import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    Player1Component,
    Player2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
