import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyiceiptwalaComponent } from './whyiceiptwala.component';

describe('WhyiceiptwalaComponent', () => {
  let component: WhyiceiptwalaComponent;
  let fixture: ComponentFixture<WhyiceiptwalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyiceiptwalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyiceiptwalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
