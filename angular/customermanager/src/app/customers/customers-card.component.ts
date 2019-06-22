import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {

  constructor(private http:HttpClient) { }
  @Input() customersData;
  ngOnInit() {
    console.log(this.http);
    console.log(this.customersData);
  }

}
