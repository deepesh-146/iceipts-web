import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { AntiSpamPolicyComponent } from './anti-spam-policy/anti-spam-policy.component';


@NgModule({
  declarations: [PolicyComponent, PrivatePolicyComponent, TermsOfServiceComponent, AntiSpamPolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule
  ]
})
export class PolicyModule { }
