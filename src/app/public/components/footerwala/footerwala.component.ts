import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerwala',
  templateUrl: './footerwala.component.html',
  styleUrls: ['./footerwala.component.css']
})
export class FooterwalaComponent implements OnInit {

  currentYear = (new Date()).getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
