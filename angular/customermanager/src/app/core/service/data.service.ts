import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICustomer } from "../../shared/interfaces";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
@Injectable()
export class DataService{
    url = "/api/customers";
    constructor(private http:HttpClient){

    }
    getCustomersData():Observable<ICustomer[]>{
        return this.http.get<ICustomer[]>(this.url).pipe(
            map((res) => res)
        )
    }
    getCustomerDataById(id:number):Observable<ICustomer>{
        return this.http.get<ICustomer>(this.url+"/"+id).pipe(
            map((res) => res)
        )
    }
}