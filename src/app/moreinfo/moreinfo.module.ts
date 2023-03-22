import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WGmanagementComponent } from './components/wgmanagement/wgmanagement.component';
import { MoreinfoComponent } from './moreinfo.component';
import { MoreinfoRoutingModule } from './moreinfo-routing.module';
import { ErpComponent } from './components/erp/erp.component';
import { GstComponent } from './components/gst/gst.component';
import { ScanpayComponent } from './components/scanpay/scanpay.component';
import { EmpmanagementComponent } from './components/empmanagement/empmanagement.component';
import { SelfcheckoutComponent } from './components/selfcheckout/selfcheckout.component';






@NgModule({
  declarations: [WGmanagementComponent, MoreinfoComponent, ErpComponent, GstComponent, ScanpayComponent, EmpmanagementComponent, SelfcheckoutComponent],
  imports: [
    CommonModule,
    MoreinfoRoutingModule
    
  ]
})
export class MoreinfoModule { }
