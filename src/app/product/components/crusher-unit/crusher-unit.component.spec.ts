import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrusherUnitComponent } from './crusher-unit.component';

describe('CrusherUnitComponent', () => {
  let component: CrusherUnitComponent;
  let fixture: ComponentFixture<CrusherUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrusherUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrusherUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
