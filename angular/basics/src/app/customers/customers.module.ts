import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersComponent, CustomersCardComponent],
  exports:[CustomersComponent]
})
export class CustomersModule { }
