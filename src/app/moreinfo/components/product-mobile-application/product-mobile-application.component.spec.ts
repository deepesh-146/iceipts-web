import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMobileApplicationComponent } from './product-mobile-application.component';

describe('ProductMobileApplicationComponent', () => {
  let component: ProductMobileApplicationComponent;
  let fixture: ComponentFixture<ProductMobileApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMobileApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMobileApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
