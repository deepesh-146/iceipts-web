import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;



  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  //  this.id= this.route.snapshot.paramMap.get('home');
  //  console.log(this.id);
  //  let myPassedData: any = routeParams.params;
  //  console.log(myPassedData.someProperty); #Prints "SomeValue"
  //  this.id = this.route.snapshot.paramMap.get("id");
  //  console.log("sd",this.id)
  //  this.route.paramMap.subscribe(params => {
  //   this.id = params.get('id');
  //   console.log("params",this.id)
  // });
  // this.id = this.route.snapshot.queryParamMap.get("page");
  // console.log("params",this.id)
  // this.route.queryParamMap.subscribe(params => {
  //   let a = params.get('page');
  //   if(a== "clients"){
 
  //     document.getElementById("clients23").scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "nearest"
  //     });
  //   }
   
  // });

 

  }




}
