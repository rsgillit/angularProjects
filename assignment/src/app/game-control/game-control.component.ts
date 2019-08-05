import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timer;
  counter = 0;

  @Output('gameStarted') gameStarted = new EventEmitter<number>();
  //@Output('gameStopped') gameStopped = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.timer = setInterval( () => {
      this.counter++;
      this.gameStarted.emit(this.counter);

    },1000);
    
  }

  stopGame() {
    //this.gameStopped.emit();
    clearInterval( this.timer);
  }

}
