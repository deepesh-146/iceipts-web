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
  // Loader
  isLoading: boolean;
  scroller:any;

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  goDown2() {
    //   //this.scroller.scrollToAnchor("targetGreen");
    //   // this.router.navigate(['/home','home']);
    //   this.router.navigate(['/home',{key:"SomeValue"}])
    document.getElementById('about21').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  scrollPoint2() {
    // document.getElementById("point_2").scrollIntoView({behavior: "smooth"});
    document.getElementById('scroll11').scrollIntoView();
  }

  scrollPoint1(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}
