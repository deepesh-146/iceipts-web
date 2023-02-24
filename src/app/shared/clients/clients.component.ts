import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // carousel option
  testimonialOptions: OwlOptions = {
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
    },
    nav: false,
  };
}
