import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsCardListComponent } from './hotels-card-list.component';

describe('HotelsCardListComponent', () => {
  let component: HotelsCardListComponent;
  let fixture: ComponentFixture<HotelsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
