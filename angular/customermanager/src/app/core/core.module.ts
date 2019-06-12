import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  declarations: [NavbarComponent],
  exports:[NavbarComponent],
  providers:[DataService]
})
export class CoreModule { }
