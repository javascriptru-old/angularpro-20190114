import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ HelloComponent ]
})
export class AppModule { 
  constructor(injector: Injector) {
    const HelloElement = createCustomElement(HelloComponent, { injector });
    customElements.define('custom-hello', HelloElement);
  }

  ngDoBootstrap() {}
}
