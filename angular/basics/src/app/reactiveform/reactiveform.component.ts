import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, EmailValidator } from '@angular/forms';
import { parseHttpResponse } from 'selenium-webdriver/http';
function validateRating(min:number, max:number){
  return function (c:AbstractControl):{[key:string]:boolean} | null{
  
    if(c.value < min || c.value > max){
      return {
        match:true
      }
    }
    return null
  }
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
    // console.log('ngOnChanges in reactive form ');
  }
  customerInfo;
  ngOnInit() {
    this.customerInfo = new FormGroup({
      firstName : new FormControl('krishna',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('radhe'),
      rating: new FormControl('',[Validators.required,validateRating(1,5)]),
      notification: new FormControl('email'),
      phone:new FormControl(''),
      email:new FormControl('',Validators.required)
    })
  }
  ngDoCheck(){
    // console.log('ngDocheck in reactive form');
  }
  verification(){
    let notification = this.customerInfo.get("notification");
    console.log(notification)
    setTimeout(()=>{
      console.log(notification.value);
      let phone , email
      phone = this.customerInfo.get('phone');
      email = this.customerInfo.get('email');
      if(notification.value == 'phone'){
         
        phone.setValidators(Validators.required)
        email.clearValidators()
      }else{
        email.setValidators(Validators.required)
        phone.clearValidators()
      }
      phone.updateValueAndValidity();
      email.updateValueAndValidity();
    },0)
    
  }

}
