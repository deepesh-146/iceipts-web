import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeAndWarrantyManagementComponent } from './guarantee-and-warranty-management.component';

describe('GuaranteeAndWarrantyManagementComponent', () => {
  let component: GuaranteeAndWarrantyManagementComponent;
  let fixture: ComponentFixture<GuaranteeAndWarrantyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuaranteeAndWarrantyManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeAndWarrantyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
