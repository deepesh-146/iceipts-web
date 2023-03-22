import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanpayComponent } from './scanpay.component';

describe('ScanpayComponent', () => {
  let component: ScanpayComponent;
  let fixture: ComponentFixture<ScanpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
