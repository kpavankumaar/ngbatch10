import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emailDetails = 'krishna@gmail.com';
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
  test(){
    console.log('test for ngModelChange');
  }
  states = ['telangana', 'Madhyapradesh','Tamil nadu'];
  chooseState(val){
    this.title = val;
  }

  ngOnChanges(){
    console.log('ngOnChanges in app component ');
  }
  ngOnInit() {
    console.log('ngOnInit in app component');
  }
  ngDoCheck(){
    console.log('ngDocheck in app component');
  }
}
