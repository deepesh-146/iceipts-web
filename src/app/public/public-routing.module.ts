import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutwalaComponent } from './components/aboutwala/aboutwala.component';
import { ClientwalaComponent } from './components/clientwala/clientwala.component';
import { ContactwalaComponent } from './components/contactwala/contactwala.component';
import { FeaturewalaComponent } from './components/featurewala/featurewala.component';
import { FooterwalaComponent } from './components/footerwala/footerwala.component';
import { ServicewalaComponent } from './components/servicewala/servicewala.component';
import { WhyiceiptwalaComponent } from './components/whyiceiptwala/whyiceiptwala.component';
// import { PublicComponent } from './public.component';

const routes: Routes = [
  
  
        { path : 'about' , component : AboutwalaComponent},
        { path : 'client' , component : ClientwalaComponent},
        { path : 'contact', component : ContactwalaComponent},
        { path : 'feature' , component : FeaturewalaComponent},
        { path : 'footer' ,  component : FooterwalaComponent},
        { path : 'service' , component : ServicewalaComponent},
        { path : 'whyiceipt' , component : WhyiceiptwalaComponent}
      
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
