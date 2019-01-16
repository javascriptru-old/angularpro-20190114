import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  template: `<app-subchild></app-subchild>`,
  styleUrls: ['./child.component.css'],
  //providers: [ UserService ],
  viewProviders: [ UserService ]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
