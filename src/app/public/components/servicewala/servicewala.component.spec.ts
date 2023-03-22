import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicewalaComponent } from './servicewala.component';

describe('ServicewalaComponent', () => {
  let component: ServicewalaComponent;
  let fixture: ComponentFixture<ServicewalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicewalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicewalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
