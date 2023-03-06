import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {GetInfoService} from '../app/get-info.service';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SearchbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GetInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
