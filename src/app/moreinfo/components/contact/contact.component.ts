import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  selectedAddress: string = 'address1'; // Default to address1

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

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
      // const url = 'https://web.iceipts.com/api/apiserver/enquiries/contactUs';
      const url = 'https://uaestaging.iceipts.com/api/apiserver/enquiries/contactUs';
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJEZWVwZXNoIGt1c2h3YWhhIiwiaWQiOiIxOTZkMGQ2My03OWI4LTRjOGEtYWE0MS00YjBkN2YzYmFkZjkiLCJpYXQiOjE3MDU2MzU4NTUsImV4cCI6MTczNzE3MTg1NSwiYXVkIjoiRGVlcGVzaCBrdXNod2FoYSJ9.9cwv6w_MCdkFyHxEs8ceWOBuPQMgrc6FX39IxvD1Ajo');

      const formData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        phone: this.contactForm.value.phone,
        status: 'PENDING'
      };

      this.http.post(url, formData, { headers }).subscribe(
        response => {
          alert('Contact form saved successfully.')
          this.contactForm.reset();
        },
        error => {
          alert('Something went wrong.')
        }
      );
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.contactForm);
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
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
