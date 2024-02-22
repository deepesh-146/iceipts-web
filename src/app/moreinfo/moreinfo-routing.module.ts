import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpmanagementComponent } from './components/empmanagement/empmanagement.component';
import { ErpComponent } from './components/erp/erp.component';
import { GstComponent } from './components/gst/gst.component';
import { ScanpayComponent } from './components/scanpay/scanpay.component';
import { SelfcheckoutComponent } from './components/selfcheckout/selfcheckout.component';
import { WGmanagementComponent } from './components/wgmanagement/wgmanagement.component';
import { IndustryComponent } from './components/industry/industry.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

const routes:Routes=[

  { path : 'wgmanagement', component : WGmanagementComponent },
  { path : 'gst', component : GstComponent },
  { path : 'erp', component : ErpComponent },
  { path : 'scanpay', component : ScanpayComponent },
  { path : 'selfcheckout', component : SelfcheckoutComponent},
  { path : 'empmanagement', component : EmpmanagementComponent},
  { path : 'industry', component : IndustryComponent},
  { path : 'about', component : AboutUsComponent},
  { path : 'contact', component : ContactComponent},
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreinfoRoutingModule { }
