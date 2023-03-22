import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturewalaComponent } from './featurewala.component';

describe('FeaturewalaComponent', () => {
  let component: FeaturewalaComponent;
  let fixture: ComponentFixture<FeaturewalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturewalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturewalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
