import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('username') userDetails:ElementRef;
  title = 'First Basic Project';
  fontColor = 'lightgreen';
  constructor(){
    console.log("app component contructor");
  }
  runTheCode(val){
    console.log(val);
    this.title = val;
    this.userDetails.nativeElement.style.backgroundColor = 'lightgrey';
  }
}
