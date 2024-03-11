import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFleetManagementComponent } from './product-fleet-management.component';

describe('ProductFleetManagementComponent', () => {
  let component: ProductFleetManagementComponent;
  let fixture: ComponentFixture<ProductFleetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFleetManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFleetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
