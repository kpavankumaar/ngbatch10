import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { EditCustomerComponent } from './edit-customer.component';

const routes: Routes = [
  { path:"",
    component:CustomerComponent,
    children:[
      {path:"details",component:CustomerDetailsComponent},
      {path:"orders",component:CustomerOrdersComponent},
      {path:"edit",component:EditCustomerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
