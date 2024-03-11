import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductErpComponent } from './product-erp.component';

describe('ProductErpComponent', () => {
  let component: ProductErpComponent;
  let fixture: ComponentFixture<ProductErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductErpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
