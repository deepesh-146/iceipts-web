import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactwalaComponent } from './contactwala.component';

describe('ContactwalaComponent', () => {
  let component: ContactwalaComponent;
  let fixture: ComponentFixture<ContactwalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactwalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactwalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
