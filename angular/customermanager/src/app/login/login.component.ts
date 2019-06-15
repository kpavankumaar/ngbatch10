import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  profileForm;
  ngOnInit() {
    this.profileForm = new FormGroup({})
    
  }
  loginFn(){
    // console.log("loginFn");
    this.authService.login({"email":"xyz@gmail.com","password":"xyz"}).subscribe((res) => {
      this.authService.isAuthenticated = true;
      console.log(this.authService.redirectUrl);
      if(this.authService.redirectUrl){
        const url = this.authService.redirectUrl;
        this.authService.redirectUrl ="";
        this.router.navigate([url]);
      }else{
        this.router.navigate(["/customers"]);
      }
    })
    // this.router.navigateByUrl("/customers");

  }

}
