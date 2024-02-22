import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstFillingComponent } from './gst-filling.component';

describe('GstFillingComponent', () => {
  let component: GstFillingComponent;
  let fixture: ComponentFixture<GstFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
