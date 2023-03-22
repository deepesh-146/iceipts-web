import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGmanagementComponent } from './wgmanagement.component';

describe('WGmanagementComponent', () => {
  let component: WGmanagementComponent;
  let fixture: ComponentFixture<WGmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WGmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WGmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
