import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForDemoComponent } from './request-for-demo.component';

describe('RequestForDemoComponent', () => {
  let component: RequestForDemoComponent;
  let fixture: ComponentFixture<RequestForDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
