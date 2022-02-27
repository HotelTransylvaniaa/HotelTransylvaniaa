import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsBadgeCardComponent } from './hotels-badge-card.component';

describe('HotelsBadgeCardComponent', () => {
  let component: HotelsBadgeCardComponent;
  let fixture: ComponentFixture<HotelsBadgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsBadgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsBadgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
