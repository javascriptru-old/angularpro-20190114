import { Component, OnInit } from '@angular/core';
/*
@Component({
  selector: 'app-myivy',
  template: `
     <p>
        myivy works! <b>{{name}}</b>
     </p>
     <input (input)="name = $event.target.value">
  `,
})
export class MyivyComponent {
   name;
}
*/

import * as core from '@angular/core';
//ɵ

export class MyivyComponent {
   name = 'asdfadsf';

   updateName(name, ctx) {
     console.log('updateName');
     this.name = name;
     core.ɵdetectChanges<MyivyComponent>(ctx);
   }

   static ngComponentDef = core.ɵdefineComponent({
     consts: 5,
     vars: 5,
     type: MyivyComponent,
     selectors: [['app-myivy']],
     factory: () => new MyivyComponent(),
     template: (renderFlags: core.ɵRenderFlags, ctx: MyivyComponent) => {
        if(renderFlags & 1) {
          core.ɵelementStart(0, 'p');
          core.ɵtext(1, 'myivy works!');
          core.ɵelementStart(2, 'b');
          //core.ɵelementStart(3, '');
          core.ɵelementEnd();
          core.ɵelementEnd();
          core.ɵelementStart(3, 'input');
          core.ɵlistener('input', $event => ctx.updateName($event.target.value, ctx));
          //first run
        }
        console.log(renderFlags);
        if(renderFlags & 2) {
          console.log('IN')
          //after first run
          core.ɵtextBinding(2, ctx.name);
          core.ɵelementProperty(3, 'value', ctx.name);
        }
     }
   });

}

core.ɵrenderComponent(MyivyComponent);