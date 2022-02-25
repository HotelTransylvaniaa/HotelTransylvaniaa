import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHotelItemComponent } from './top-hotel-item.component';

describe('TopHotelItemComponent', () => {
  let component: TopHotelItemComponent;
  let fixture: ComponentFixture<TopHotelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHotelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
