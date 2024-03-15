import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { AntiSpamPolicyComponent } from './anti-spam-policy/anti-spam-policy.component';

const routes: Routes = [
  {
    path: 'privacy-policy',
    component:PrivatePolicyComponent,
  },
  {
    path: 'terms-of-service',
    component:TermsOfServiceComponent,
  },
  {
    path: 'anti-spam-policy',
    component:AntiSpamPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
