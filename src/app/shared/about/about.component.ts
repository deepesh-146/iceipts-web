import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 // Declare height and width variables
 scrHeight:any;
 scrWidth:any;

 @HostListener('window:resize', ['$event'])
 getScreenSize(event?: undefined) {
       this.scrHeight = window.innerHeight;
       this.scrWidth = window.innerWidth;
 }

 // Constructor
 constructor() {
    //  let screenWidth = this.getScreenSize();
      //  aboutHeading() {
      //   if (this.scrWidth < 768) {
          
      //   }
      //  }
     
 }

  ngOnInit(): void {
  }

}
