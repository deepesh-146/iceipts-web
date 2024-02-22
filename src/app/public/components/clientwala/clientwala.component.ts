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
      customerImage : 'assets/images/user/img-5.jpg',
      customerComment : `Absolutely fantastic! I wholeheartedly endorse iceipts Solutions as an outstanding ERP agency. Among the top-tier agencies I've encountered. I wouldn't hesitate to recommend their services to anyone.`
    },
    {
      customerName : "Jim Sparrow",
      customerOccupation : "Software Engineer",
      customerImage : 'assets/images/user/img-2.jpg',
      customerComment : `Incredible experience! I can confidently vouch for iceipts Solutions as a premier ERP agency. Undoubtedly one of the finest agencies I've ever worked with. I'd gladly refer their services to others.`
    },
    {
      customerName : "Samantha Nikolus",
      customerOccupation : "Software Designer",
      customerImage : 'assets/images/user/img-1.jpg',
      customerComment : `Exceptional service! I unequivocally recommend iceipts Solutions as a leading ERP agency. One of the most impressive agencies I've ever encountered. I'd eagerly endorse their work to others.`
    },
    {
      customerName : "Robert Tremer",
      customerOccupation : "MEAN Stack Developer",
      customerImage : 'assets/images/user/img-4.jpg',
      customerComment : `Outstanding performance! I have no reservations in recommending iceipts Solutions as an exemplary ERP agency. Truly one of the best agencies I've come across. I'd enthusiastically promote their services.`
    },
    {
      customerName : "Angelika Guevara",
      customerOccupation : "MERN Stack Developer",
      customerImage : 'assets/images/user/img-3.jpg',
      customerComment : `Remarkable expertise! I am thoroughly impressed by iceipts Solutions as an exceptional ERP agency. Among the very best agencies I've had the pleasure of working with. I wouldn't hesitate to advocate for their work.`
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
