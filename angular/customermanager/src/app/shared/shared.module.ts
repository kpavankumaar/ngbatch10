import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByDirective } from './directives/sortbydirective';
import { CapitalizeFirstLetter } from './capitalizepipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortByDirective,CapitalizeFirstLetter],
  exports:[SortByDirective,CapitalizeFirstLetter]
})
export class SharedModule { }
