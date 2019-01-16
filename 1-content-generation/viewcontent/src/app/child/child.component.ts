import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewChild, AfterViewInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { SomeService } from '../some.service';
import { BannerComponent } from '../banner/banner.component';
import { Banner2Component } from '../banner2/banner2.component';

@Component({
  selector: 'app-child',
  template: `
  <p colory #ccc="colory">
    {{ 'child works!' | reverse }}
  </p>
  <button (click)="ccc.changeColor('green')">Change Color</button>
  <input (input)="ccc.changeColor($event.target.value)">
  <ng-template #m> 
    Hi!
  </ng-template>

  <ng-container *ngTemplateOutlet="m">
  </ng-container>

  <ng-container *ngComponentOutlet="myComponent">
  </ng-container>
  `,
  styleUrls: ['./child.component.css'],
  providers: [ SomeService ]
})
export class ChildComponent implements OnInit, AfterContentInit, AfterViewInit {

  myComponent;
  @Input('x') x: string = 'title'
  @ContentChild('h') element; 
  @ContentChildren(SomeService, { read: ChildComponent }) componets: QueryList<ChildComponent>;

  // @ViewChild
  // @ViewChildren

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private view: ViewContainerRef) {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
    // const BannerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    // const component = this.view.createComponent(BannerComponentFactory);
    this.myComponent = BannerComponent;
    setTimeout(_ => {
      this.myComponent = Banner2Component;
    }, 3000);
  }

  ngAfterContentInit() {
    console.log(this.element);
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }


}