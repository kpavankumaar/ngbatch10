import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {
  loginOrLogout = "Login";
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
   
  }

  ngDoCheck(){
    // if(this.authService.isAuthenticated){
    //   this.loginOrLogout = "Logout";
    // }else{
    //   this.loginOrLogout = "Login";
    // }
    this.loginOrLogoutText();
  }
  loginLogOut(){
      console.log("LoginLogout")
      if(this.authService.isAuthenticated){
        this.authService.logOut().subscribe(() => {
          this.authService.isAuthenticated = false;
        })
        this.loginOrLogoutText()
      }else{
        this.router.navigate(["/login"]);
        
      }
  }
  loginOrLogoutText(){
    this.loginOrLogout = this.authService.isAuthenticated ? "Logout":"Login";
  }

}
