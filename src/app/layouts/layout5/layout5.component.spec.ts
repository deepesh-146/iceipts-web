import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout5Component } from './layout5.component';

describe('Layout5Component', () => {
  let component: Layout5Component;
  let fixture: ComponentFixture<Layout5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Layout5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
