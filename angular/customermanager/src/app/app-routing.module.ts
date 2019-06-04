import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const route:Routes = [
    {path:"customers",loadChildren:"./customers/customersmodule#CustomersModule"},
    {path:"customers/:id",loadChildren:"./customer/customermodule#CustomerModule"},
    {path:"orders",loadChildren:"./orders/ordersmodule#OrdersModule"}
]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}