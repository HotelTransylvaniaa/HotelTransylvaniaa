import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHotelComponent } from './top-hotel.component';

describe('TopHotelComponent', () => {
  let component: TopHotelComponent;
  let fixture: ComponentFixture<TopHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
