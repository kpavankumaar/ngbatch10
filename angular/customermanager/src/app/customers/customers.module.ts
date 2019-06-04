import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersCardComponent, CustomersGridComponent, CustomersComponent]
})
export class CustomersModule { }
