import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyivyComponent } from './myivy.component';

describe('MyivyComponent', () => {
  let component: MyivyComponent;
  let fixture: ComponentFixture<MyivyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyivyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyivyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
