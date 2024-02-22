import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityManagementComponent } from './facility-management.component';

describe('FacilityManagementComponent', () => {
  let component: FacilityManagementComponent;
  let fixture: ComponentFixture<FacilityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
