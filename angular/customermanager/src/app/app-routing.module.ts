import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const route:Routes = [
    {path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},
    {path:"customers/:id",loadChildren:"./customer/customer.module#CustomerModule"},
    {path:"orders",loadChildren:"./orders/orders.module#OrdersModule"}
]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}