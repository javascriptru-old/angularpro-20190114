import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-example'} ) ,
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
