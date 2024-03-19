import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-for-demo',
  templateUrl: './request-for-demo.component.html',
  styleUrls: ['./request-for-demo.component.css']
})
export class RequestForDemoComponent implements OnInit {

  public DemoForm: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.DemoForm = this.formBuilder.group({
      firstName: ['', [Validators.required, this.trimValidator]],
      lastName: ['', [Validators.required, this.trimValidator]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10), this.trimValidator]],
      email: ['', [Validators.required, Validators.email, this.trimValidator]],
      companyName: ['', [Validators.required, this.trimValidator]],
      referral: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.DemoForm.invalid) {
      return;
    }
    const formData = this.DemoForm.value;
    console.log(formData);
    this.http.post<any>('your-api-endpoint-url', formData)
      .subscribe(
        response => {
          console.log('Form submission successful!', response);
          alert('Demo form saved successfully.');
          this.DemoForm.reset();
          this.submitted = false;
        },
        error => {
          console.error('Error submitting form:', error);
          alert('Something went wrong.');
        }
      );
  }

  trimValidator(control: FormControl) {
    if (control.value) {
      const trimmedValue = control.value.trim();
      const isValid = trimmedValue !== '';
      return isValid ? null : { 'required': true };
    }
    return null;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}