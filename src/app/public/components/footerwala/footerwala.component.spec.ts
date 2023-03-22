import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterwalaComponent } from './footerwala.component';

describe('FooterwalaComponent', () => {
  let component: FooterwalaComponent;
  let fixture: ComponentFixture<FooterwalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterwalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterwalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
