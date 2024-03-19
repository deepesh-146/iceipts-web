import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iCeipts Technology';

  constructor(private router: Router, private scrollService: ScrollService){}
  public isCollapsed = true;
  isLoading: boolean;
  scroller:any;

  isFilterVisible = false;
  isFilterVisible2 = false;
  isHovered: boolean = false;
  isHovered2: boolean = false;

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  toggleFilter(isHovered: boolean): void {
    this.isFilterVisible = isHovered;
  }

  toggleFilter2(isHovered2: boolean): void {
    this.isFilterVisible2 = isHovered2;
  }

  goDown2() {
    document.getElementById('about21').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  scrollPoint2() {
    document.getElementById('scroll11').scrollIntoView();
  }

  scrollPoint1(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}
