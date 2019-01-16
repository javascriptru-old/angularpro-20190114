import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ColoryDirective,
    DelayDirective,
    BannerComponent,
    Banner2Component,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ BannerComponent, Banner2Component ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
