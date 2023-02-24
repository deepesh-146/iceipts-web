import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollspyDirective } from './scrollspy.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [AboutComponent, ClientsComponent, ContactComponent, FeaturesComponent, FooterComponent, ServicesComponent, ScrollspyDirective],
  imports: [
    CommonModule, CarouselModule, CountToModule
  ],
  exports: [AboutComponent, ClientsComponent, ContactComponent, FeaturesComponent, FooterComponent, ServicesComponent, ScrollspyDirective]
})
export class SharedModule { }
