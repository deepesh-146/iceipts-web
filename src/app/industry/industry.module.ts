import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryRoutingModule } from './industry-routing.module';
import { IndustryComponent } from './industry.component';
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


@NgModule({
  declarations: [IndustryComponent, MiningComponent, EducationComponent, HealthcareComponent, SuperMarketComponent, RetailComponent, ManufacturingComponent, FashionComponent, LogisticComponent, HospitalityComponent, FacilityManagementComponent, FoodAndBeverageComponent],
  imports: [
    CommonModule,
    IndustryRoutingModule
  ]
})
export class IndustryModule { }
