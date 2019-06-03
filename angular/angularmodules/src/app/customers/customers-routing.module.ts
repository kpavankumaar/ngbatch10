import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomersCardComponent } from "./customers-card.component";

const route:Routes = [
    {path:"",
     component:CustomersComponent,
     children:[
         {path:"card",component:CustomersCardComponent}
     ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class CustomersRoutingModule{

}