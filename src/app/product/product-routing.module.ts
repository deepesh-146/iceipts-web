import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './components/accounting/accounting.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CampaignManagementComponent } from './components/campaign-management/campaign-management.component';
import { CRMComponent } from './components/crm/crm.component';
import { CrusherUnitComponent } from './components/crusher-unit/crusher-unit.component';
import { ExpensesManagementComponent } from './components/expenses-management/expenses-management.component';
import { GstFillingComponent } from './components/gst-filling/gst-filling.component';
import { GuaranteeAndWarrantyManagementComponent } from './components/guarantee-and-warranty-management/guarantee-and-warranty-management.component';
import { HRMSComponent } from './components/hrms/hrms.component';
import { InventoryManagementComponent } from './components/inventory-management/inventory-management.component';
import { TransportingComponent } from './components/transporting/transporting.component';
import { WarehouseManagementComponent } from './components/warehouse-management/warehouse-management.component';

const routes:Routes=[

  { path : 'inventory-management', component : InventoryManagementComponent },
  { path : 'accounting', component : AccountingComponent },
  { path : 'HRMS', component : HRMSComponent },
  { path : 'warehouse-management', component : WarehouseManagementComponent },
  { path : 'GST-filling', component : GstFillingComponent},
  { path : 'campaign-management', component : CampaignManagementComponent},
  { path : 'crusher-unit', component : CrusherUnitComponent},
  { path : 'transporting', component : TransportingComponent},
  { path : 'CRM', component : CRMComponent},
  { path : 'expenses-management', component : ExpensesManagementComponent},
  { path : 'appointment', component : AppointmentComponent},
  { path : 'guarantee-and-warranty-management', component : GuaranteeAndWarrantyManagementComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
