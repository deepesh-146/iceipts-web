import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutwalaComponent } from './aboutwala.component';

describe('AboutwalaComponent', () => {
  let component: AboutwalaComponent;
  let fixture: ComponentFixture<AboutwalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutwalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutwalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
