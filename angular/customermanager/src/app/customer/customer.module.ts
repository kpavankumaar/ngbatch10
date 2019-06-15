import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { EditCustomerComponent } from './edit-customer.component';
import { CustomerComponent } from './customer.component';
import { CanActivateGaurd } from './canactivate.gaurd';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerDetailsComponent, CustomerOrdersComponent, EditCustomerComponent, CustomerComponent],
  providers:[CanActivateGaurd]
})
export class CustomerModule { }
