import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { PublicComponent } from './public/public.component';
import { IndustryComponent } from './industry/industry.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  // { path: '', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) }
  { path : '' , redirectTo : 'home' , pathMatch : 'full'},
  { path : 'home' , component : HomeComponent},
  { path : 'public' , component : PublicComponent ,
    loadChildren:()=>import('./public/public.module').then(x=>x.PublicModule)
  },
  { path : 'moreinfo' , component : MoreinfoComponent ,
    loadChildren:()=>import('./moreinfo/moreinfo.module').then(x=>x.MoreinfoModule)
  },
  { path : 'industry' , component : IndustryComponent ,
    loadChildren:()=>import('./industry/industry.module').then(x=>x.IndustryModule)
  },
  { path : 'product' , component : ProductComponent ,
    loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)
  },
  { path : '**' , component : HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
