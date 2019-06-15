import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "../core/service/auth.service";

@Injectable()
export class CanActivateGaurd implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        
        if(this.authService.isAuthenticated){
            return true;
        }else{
            this.authService.redirectUrl = state.url;
            this.router.navigate(['login']);
            return false;

        }
        
    }
    constructor(private authService: AuthService, private router:Router){
        
    }
}