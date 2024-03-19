// scroll.service.ts
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) {
    // Subscribe to route change events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
