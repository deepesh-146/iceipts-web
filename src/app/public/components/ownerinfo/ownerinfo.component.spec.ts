import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerinfoComponent } from './ownerinfo.component';

describe('OwnerinfoComponent', () => {
  let component: OwnerinfoComponent;
  let fixture: ComponentFixture<OwnerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
