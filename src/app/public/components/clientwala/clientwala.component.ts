import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientwala',
  templateUrl: './clientwala.component.html',
  styleUrls: ['./clientwala.component.css']
})
export class ClientwalaComponent implements OnInit {

  customer = [
    {
      customerName : "Roberta Guevara",
      customerOccupation : "Web Developer",
      customerImage : 'assets/images/user/img-1.jpg',
      customerComment : 'Without any doubt I recommend iceipts Solutions as one of the best ERP agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.'
    },
    {
      customerName : "Roberta Guevara",
      customerOccupation : "Software Engineer",
      customerImage : 'assets/images/user/img-1.jpg',
      customerComment : 'Really Without any doubt I recommend iceipts Solutions as one of the best ERP agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.'
    },
    {
      customerName : "Roberta Guevara",
      customerOccupation : "Software Designer",
      customerImage : 'assets/images/user/img-1.jpg',
      customerComment : 'Good. Without any doubt I recommend iceipts Solutions as one of the best ERP agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.'
    },
    {
      customerName : "Roberta Guevara",
      customerOccupation : "MEAN Stack Developer",
      customerImage : 'assets/images/user/img-1.jpg',
      customerComment : 'Helpful. Without any doubt I recommend iceipts Solutions as one of the best ERP agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.'
    },
    {
      customerName : "Roberta Guevara",
      customerOccupation : "MERN Stack Developer",
      customerImage : 'assets/images/user/img-1.jpg',
      customerComment : 'Wonderful, without any doubt I recommend iceipts Solutions as one of the best ERP agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.'
    },
  ]

  currentSlide = 2;
  currentCustomer: any;

  constructor() { }

  ngOnInit(): void {
    this.updateCurrentCustomer();
  }

  onSlide(slideEvent: any) {
    this.currentSlide = slideEvent;
    console.log('Slide event', slideEvent);
    this.updateCurrentCustomer();
  }

  onArrowClick(direction: 'left' | 'right') {
    if (direction === 'left') {
      this.currentSlide = (this.currentSlide - 1 + this.customer.length) % this.customer.length;
    } else {
      this.currentSlide = (this.currentSlide + 1) % this.customer.length;
    }
    this.updateCurrentCustomer();
  }

  updateCurrentCustomer() {
    this.currentCustomer = this.customer[this.currentSlide];
  }


}
