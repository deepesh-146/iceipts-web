import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iCeipts Technology';

  constructor(private router: Router){}
  public isCollapsed = true;
  isLoading: boolean;
  scroller:any;
  isFilterVisible = false;

  isHovered: boolean = false;

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
