import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Basic Project';
  fontColor = 'lightgreen';
  constructor(){
    console.log("app component contructor");
  }
}
