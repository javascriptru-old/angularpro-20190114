import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysuperlibComponent } from './mysuperlib.component';

describe('MysuperlibComponent', () => {
  let component: MysuperlibComponent;
  let fixture: ComponentFixture<MysuperlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysuperlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysuperlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
