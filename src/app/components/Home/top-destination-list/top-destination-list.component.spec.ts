import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDestinationListComponent } from './top-destination-list.component';

describe('TopDestinationListComponent', () => {
  let component: TopDestinationListComponent;
  let fixture: ComponentFixture<TopDestinationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDestinationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDestinationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
