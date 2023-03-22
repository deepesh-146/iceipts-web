import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmanagementComponent } from './empmanagement.component';

describe('EmpmanagementComponent', () => {
  let component: EmpmanagementComponent;
  let fixture: ComponentFixture<EmpmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
