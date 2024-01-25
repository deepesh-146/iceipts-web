import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportingComponent } from './transporting.component';

describe('TransportingComponent', () => {
  let component: TransportingComponent;
  let fixture: ComponentFixture<TransportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
