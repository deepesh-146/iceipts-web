import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientwalaComponent } from './clientwala.component';

describe('ClientwalaComponent', () => {
  let component: ClientwalaComponent;
  let fixture: ComponentFixture<ClientwalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientwalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientwalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
