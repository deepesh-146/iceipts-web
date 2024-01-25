import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutwalaComponent } from './components/aboutwala/aboutwala.component';
import { ClientwalaComponent } from './components/clientwala/clientwala.component';
import { ContactwalaComponent } from './components/contactwala/contactwala.component';
import { FeaturewalaComponent } from './components/featurewala/featurewala.component';
import { FooterwalaComponent } from './components/footerwala/footerwala.component';
import { ServicewalaComponent } from './components/servicewala/servicewala.component';
import { WhyiceiptwalaComponent } from './components/whyiceiptwala/whyiceiptwala.component';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';
import { OwnerinfoComponent } from './components/ownerinfo/ownerinfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AboutwalaComponent,
    ClientwalaComponent,
    ContactwalaComponent,
    FeaturewalaComponent,
    FooterwalaComponent,
    ServicewalaComponent,
    WhyiceiptwalaComponent,
    PublicComponent,
    OwnerinfoComponent,
  ],
  imports: [CommonModule, RouterModule, PublicRoutingModule, NgbModule],
  exports: [
    AboutwalaComponent,
    ClientwalaComponent,
    ContactwalaComponent,
    FeaturewalaComponent,
    FooterwalaComponent,
    ServicewalaComponent,
    WhyiceiptwalaComponent,
  ],
})
export class PublicModule {}
