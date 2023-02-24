import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { LayoutsRoutingModule } from './layout-routing.module';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout4Component } from './layout4/layout4.component';
import { Layout5Component } from './layout5/layout5.component';


@NgModule({
  declarations: [Layout1Component, Layout2Component, Layout3Component, Layout4Component, Layout5Component],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    CarouselModule,
    CountToModule
  ]
})
export class LayoutsModule { }
