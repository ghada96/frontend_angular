import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VetrineComponent } from './vetrine/vetrine.component';
import {RouterModule} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import{ReactiveFormsModule}from '@angular/forms';
import{FormsModule} from '@angular/forms';

import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { FooterComponent } from './footer/footer.component';
import { Forms7Component } from './forms7/forms7.component';
import { NajibaComponent } from './najiba/najiba.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    VetrineComponent ,
    ConnectComponent,
    SubscribeComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    HomeComponent,
    TestComponent,
    TestPipesComponent,
    FooterComponent,
    Forms7Component,
    NajibaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'' ,
        component:VetrineComponent
      },
      {
        path:'connect' ,
        component:ConnectComponent
      },
      {
        path:'subscribe' ,
        component:SubscribeComponent
      },
      {
        path:'addtodo' ,
        component:AddTodoComponent
      },
      {
        path:'updatetodo' ,
        component:UpdateTodoComponent
      },
      {
        path:'home' ,
        component:HomeComponent
      },
      {
        path:'test' ,
        component:TestComponent
      },
      {
        path:'testpipes' ,
        component:TestPipesComponent
      },
      {
        path:'footer' ,
        component:FooterComponent
      },
      {
        path:'form' ,
        component:Forms7Component
      },
      {
        path:'najiba' ,
        component:NajibaComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
