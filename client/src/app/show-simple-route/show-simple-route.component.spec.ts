import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSimpleRouteComponent } from './show-simple-route.component';

describe('ShowSimpleRouteComponent', () => {
  let component: ShowSimpleRouteComponent;
  let fixture: ComponentFixture<ShowSimpleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSimpleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSimpleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
