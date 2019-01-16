import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { DynamicComponentLoader } from "./dynamic-component-loader.service";
import { MessageComponent } from "./message/message.module";

@Component({
  selector: "app-root",
  template: `
    <button type="button" (click)="loadComponent()">Load!</button>

    <div #testOutlet></div>
  `,
  styles: []
})
export class AppComponent {
  title = "real-dynamic-components";

  @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet: ViewContainerRef;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
  ) { }

  loadComponent() {
    this.dynamicComponentLoader
    .getComponentFactory<MessageComponent>('message')
    .subscribe(componentFactory => {
      this.testOutlet.createComponent(componentFactory);
    }, error => {
      console.warn(error);
    });
  }
}
