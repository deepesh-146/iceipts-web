import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  fragment:any;




  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      console.log('fragment', this.fragment);
      if (this.fragment) {
        setTimeout(() => {
          this.scroll(this.fragment);
        }, 250);
      }
    });
  }

  



scroll(id) {
    console.log('scroll to--', id);
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }




}
