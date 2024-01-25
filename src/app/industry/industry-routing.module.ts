import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiningComponent } from './components/mining/mining.component';
import { EducationComponent } from './components/education/education.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { SuperMarketComponent } from './components/super-market/super-market.component';
import { RetailComponent } from './components/retail/retail.component';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { LogisticComponent } from './components/logistic/logistic.component';
import { HospitalityComponent } from './components/hospitality/hospitality.component';
import { FacilityManagementComponent } from './components/facility-management/facility-management.component';
import { FoodAndBeverageComponent } from './components/food-and-beverage/food-and-beverage.component';

const routes:Routes=[

  { path : 'mining', component : MiningComponent },
  { path : 'education', component : EducationComponent },
  { path : 'healthcare', component : HealthcareComponent },
  { path : 'super-market', component : SuperMarketComponent },
  { path : 'retail', component : RetailComponent},
  { path : 'manufacturing', component : ManufacturingComponent},
  { path : 'fashion', component : FashionComponent},
  { path : 'logistic', component : LogisticComponent},
  { path : 'hospitality', component : HospitalityComponent},
  { path : 'facilities-management', component : FacilityManagementComponent},
  { path : 'food-and-beverages', component : FoodAndBeverageComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryRoutingModule { }
