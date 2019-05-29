import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SamplecomponentComponent } from './reactiveform/samplecomponent/samplecomponent.component';

const route:Routes = [
  {path:'templatedrivenform', component:TemplatedrivenformComponent},
  { path:'reactiveform', 
    component:ReactiveformComponent,
    children:[
      {path:'sample',component:SamplecomponentComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    ReactiveformComponent,
    SamplecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("app module contructor");
  }
 }
