import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiSpamPolicyComponent } from './anti-spam-policy.component';

describe('AntiSpamPolicyComponent', () => {
  let component: AntiSpamPolicyComponent;
  let fixture: ComponentFixture<AntiSpamPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiSpamPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiSpamPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
