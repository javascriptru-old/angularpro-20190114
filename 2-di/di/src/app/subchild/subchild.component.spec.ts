import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubchildComponent } from './subchild.component';

describe('SubchildComponent', () => {
  let component: SubchildComponent;
  let fixture: ComponentFixture<SubchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
