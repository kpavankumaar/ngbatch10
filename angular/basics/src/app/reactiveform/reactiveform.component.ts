import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

function validateRating(c:AbstractControl):{[key:string]:boolean} | null{
  
  if(c.value < 1 || c.value > 5){
    return {
      match:true
    }
  }
  return null
}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit,OnChanges {
  @Input() emailDetails:string
  constructor() { }
  changeDetection(){
    this.emailDetails = 'srk@gmail.com';
  }



  ngOnChanges(){
    console.log('ngOnChanges in reactive form ');
  }
  customerInfo;
  ngOnInit() {
    this.customerInfo = new FormGroup({
      firstName : new FormControl('krishna',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('radhe'),
      rating: new FormControl('',[Validators.required,validateRating])
    })
  }
  ngDoCheck(){
    console.log('ngDocheck in reactive form');
  }

}
