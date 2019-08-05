import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  countList : number[] = [];
  gameStarted(event: number) {
    console.log("gameStarted, counter: ",event);
    //if(event % 2 === 0 ){
      this.countList.push(event);
      //console.log("even");
    //} else {
      //this.countListOdd.push(event);
      //console.log("Odd");

   // }
  }

  gameStopped() {
    console.log("gameStopped");

  }

  
}
