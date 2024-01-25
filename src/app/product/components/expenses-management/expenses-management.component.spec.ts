import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesManagementComponent } from './expenses-management.component';

describe('ExpensesManagementComponent', () => {
  let component: ExpensesManagementComponent;
  let fixture: ComponentFixture<ExpensesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
