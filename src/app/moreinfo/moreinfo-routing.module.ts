import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpmanagementComponent } from './components/empmanagement/empmanagement.component';
import { ErpComponent } from './components/erp/erp.component';
import { GstComponent } from './components/gst/gst.component';
import { ScanpayComponent } from './components/scanpay/scanpay.component';
import { SelfcheckoutComponent } from './components/selfcheckout/selfcheckout.component';
import { WGmanagementComponent } from './components/wgmanagement/wgmanagement.component';

const routes:Routes=[
  
  { path : 'wgmanagement', component : WGmanagementComponent },
  { path : 'gst', component : GstComponent },
  { path : 'erp', component : ErpComponent },
  { path : 'scanpay', component : ScanpayComponent },
  { path : 'selfcheckout', component : SelfcheckoutComponent},
  { path : 'empmanagement', component : EmpmanagementComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreinfoRoutingModule { }
