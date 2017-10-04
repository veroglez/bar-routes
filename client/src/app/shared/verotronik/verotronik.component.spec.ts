import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerotronikComponent } from './verotronik.component';

describe('VerotronikComponent', () => {
  let component: VerotronikComponent;
  let fixture: ComponentFixture<VerotronikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerotronikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerotronikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
