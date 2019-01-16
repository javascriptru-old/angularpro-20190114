import { NgModule, Component } from "@angular/core";
import { DYNAMIC_COMPONENT } from "../dynamic-component-loader.module";

@Component({
  selector: 'message',
  template: 'Message!'
}) 
export class MessageComponent {}


@NgModule({
  declarations: [ MessageComponent ],
  providers: [{ provide: DYNAMIC_COMPONENT, useValue: MessageComponent }],
  entryComponents: [ MessageComponent ],
})
export class MessageModule {}