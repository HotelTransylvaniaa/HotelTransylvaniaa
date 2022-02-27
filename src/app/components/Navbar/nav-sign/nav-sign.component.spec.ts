import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSignComponent } from './nav-sign.component';

describe('NavSignComponent', () => {
  let component: NavSignComponent;
  let fixture: ComponentFixture<NavSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
