import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SubchildComponent } from './subchild/subchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SubchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   // { provide: UserService, useClass: UserService, deps: [ LogService ]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
