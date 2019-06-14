import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  
})
export class CustomersComponent implements OnInit {
  cardViewStatus = true;
  gridViewStatus = false;
  customers;
  constructor(private dataService:DataService) { }

  ngOnInit() {  
    this.dataService.getCustomersData().subscribe((res)=>{
      console.log(res);
      this.customers = res;
    })
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
