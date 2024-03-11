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
import { IndustryComponent } from './components/industry/industry.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicModule } from "../public/public.module";
import { ProductErpComponent } from './components/product-erp/product-erp.component';
import { ProductFleetManagementComponent } from './components/product-fleet-management/product-fleet-management.component';
import { ProductMobileApplicationComponent } from './components/product-mobile-application/product-mobile-application.component';






@NgModule({
    declarations: [WGmanagementComponent, MoreinfoComponent, ErpComponent, GstComponent, ScanpayComponent, EmpmanagementComponent, SelfcheckoutComponent, IndustryComponent, AboutUsComponent, ContactComponent, ProductErpComponent, ProductFleetManagementComponent, ProductMobileApplicationComponent],
    imports: [
        CommonModule,
        MoreinfoRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        PublicModule
    ]
})
export class MoreinfoModule { }
