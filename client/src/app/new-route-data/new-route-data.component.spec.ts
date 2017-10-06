import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRouteDataComponent } from './new-route-data.component';

describe('NewRouteDataComponent', () => {
  let component: NewRouteDataComponent;
  let fixture: ComponentFixture<NewRouteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRouteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
