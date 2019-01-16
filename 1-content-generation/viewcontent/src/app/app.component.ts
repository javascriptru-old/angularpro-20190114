import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-child [x]="title">
     <h1 #h>Title</h1>
     <div>Body</div>
  </app-child>  

  <div *ngFor="let i of [1,2,3,4,5]">
    <div *delay="i* 1000">
      {{i}}
    </div>
  <div>
  `,
})
export class AppComponent {
  title = 'viewcontent';
}
