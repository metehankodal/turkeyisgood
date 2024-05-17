import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedTravelComponent } from './med-travel.component';

describe('MedTravelComponent', () => {
  let component: MedTravelComponent;
  let fixture: ComponentFixture<MedTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedTravelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
