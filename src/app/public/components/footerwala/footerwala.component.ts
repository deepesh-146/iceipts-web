import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-footerwala',
  templateUrl: './footerwala.component.html',
  styleUrls: ['./footerwala.component.css']
})
export class FooterwalaComponent implements OnInit {

  currentYear = (new Date()).getFullYear();
  email: string = '';
  private apiServerUrl = 'https://uaestaging.iceipts.com/api/apiserver/users/subscribeEmail';
  submitted = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  subscribe() {
    this.submitted = true;

    if (!this.email || !this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      this.submitted = false;
      return;
    }

    this.http.post(this.apiServerUrl, { email: this.email }).pipe(
      catchError((error) => {
        if (error.status === 409) {
          alert('This email is already subscribed.');
          this.email = '';
        } else {
          alert('Subscription failed. Please try again later.');
          this.email = '';
          return throwError(error); // Re-throw the error so you can catch it later if needed
        }
      })
    ).subscribe({
      next: (res) => {
        alert('Subscription successful! Thank you for subscribing.');
        this.email = '';
        this.submitted = false;
      }
    });
  }

   // Utility function for email validation
   validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


}
