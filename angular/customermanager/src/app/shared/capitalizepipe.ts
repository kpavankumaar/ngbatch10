import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'caps'
})
export class CapitalizeFirstLetter implements PipeTransform{
    transform(val){
        console.log(val);
        return val.toUpperCase();
        
    }   
}