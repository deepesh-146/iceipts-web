import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: string;
  fragment: any;

  images = [
    '../../assets/images/hero-1-img.png',
    '../../assets/images/hero-2-img.png',
    '../../assets/images/hero-3-img.png',
    '../../assets/images/hero-2-img.png',
    '../../assets/images/dottedSquare.png',
  ];
  currentSlide = 1;
  totalSlides = this.images.length;
  progressPercentage = 20;
  temp: any = 0;
  maxProgressWidth: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      if (this.fragment) {
        setTimeout(() => {
          this.scroll(this.fragment);
        }, 250);
      }
    });
  }

  onSlide(slideEvent: any) {
    this.currentSlide = slideEvent;
    this.updateProgressBar();
  }

  updateProgressBar() {
    const value = String(this.currentSlide);
    this.temp = value.slice(-1);
    this.maxProgressWidth = 425;
    const rawPercentage = ((this.temp + 1) / this.totalSlides) * 10 + 20;
    this.progressPercentage = Math.min(rawPercentage, this.maxProgressWidth);
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
