import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
@Injectable()
export class AuthService{
    isAuthenticated:Boolean = false;
    redirectUrl:string;
    url = "/api/auth/login";
    login(userDetails){
        return this.http.post(this.url,userDetails).pipe(
            map((res)=>res)
        ) 
    }
    logOut(){
        return this.http.post('/api/auth/logout',{});
    }
    constructor(public http:HttpClient){

    }
}