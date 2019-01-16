import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { MysuperlibComponent, MysuperlibModule } from 'mysuperlib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MysuperlibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
