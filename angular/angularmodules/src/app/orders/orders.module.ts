import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent, OrdersDetailComponent],
  exports:[OrdersComponent]
})
export class OrdersModule { }
