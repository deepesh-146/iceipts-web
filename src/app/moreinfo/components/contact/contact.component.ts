import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  selectedAddress: string = 'address1'; // Default to address1


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, this.trimValidator]],
      email: ['', [Validators.required, Validators.email, this.trimValidator]],
      subject: ['', [Validators.required, this.trimValidator]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10), this.trimValidator]],
      message: ['', [Validators.required, this.trimValidator]]
    });

  }

  selectAddress(event: any) {
    this.selectedAddress = event.target.value;
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.contactForm);
    }
  }

  trimValidator(control: FormControl) {
    if (control.value) {
      const trimmedValue = control.value.trim();
      const isValid = trimmedValue !== '';
      return isValid ? null : { 'required': true };
    }
    return null;
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
