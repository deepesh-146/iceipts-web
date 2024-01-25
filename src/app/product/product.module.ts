import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { InventoryManagementComponent } from './components/inventory-management/inventory-management.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { HRMSComponent } from './components/hrms/hrms.component';
import { WarehouseManagementComponent } from './components/warehouse-management/warehouse-management.component';
import { GstFillingComponent } from './components/gst-filling/gst-filling.component';
import { CampaignManagementComponent } from './components/campaign-management/campaign-management.component';
import { CrusherUnitComponent } from './components/crusher-unit/crusher-unit.component';
import { TransportingComponent } from './components/transporting/transporting.component';
import { CRMComponent } from './components/crm/crm.component';
import { ExpensesManagementComponent } from './components/expenses-management/expenses-management.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { GuaranteeAndWarrantyManagementComponent } from './components/guarantee-and-warranty-management/guarantee-and-warranty-management.component';


@NgModule({
  declarations: [ProductComponent, InventoryManagementComponent, AccountingComponent, HRMSComponent, WarehouseManagementComponent, GstFillingComponent, CampaignManagementComponent, CrusherUnitComponent, TransportingComponent, CRMComponent, ExpensesManagementComponent, AppointmentComponent, GuaranteeAndWarrantyManagementComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
