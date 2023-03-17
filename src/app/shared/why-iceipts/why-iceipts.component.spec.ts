import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyIceiptsComponent } from './why-iceipts.component';

describe('WhyIceiptsComponent', () => {
  let component: WhyIceiptsComponent;
  let fixture: ComponentFixture<WhyIceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyIceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyIceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
