import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((res)=>{
      console.log(res);
      var id = res.id
      this.dataService.getCustomerDataById(id).subscribe((res)=>{
        console.log(res)
      })
    });
  }

}
