import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersCardComponent, CustomersComponent, CustomersGridComponent]
})
export class CustomersModule { }
