import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  cardViewStatus = true;
  gridViewStatus = false;
  constructor() { }

  ngOnInit() {
  }
  laodPage(str){
    if(str === "card"){
      this.cardViewStatus = true;
      this.gridViewStatus = false;
    }
    if(str === "grid"){
      this.cardViewStatus = false;
      this.gridViewStatus = true;

    }
  }
}
