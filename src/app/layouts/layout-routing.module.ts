import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout4Component } from './layout4/layout4.component';
import { Layout5Component } from './layout5/layout5.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/layout-1', pathMatch: 'full'
    },
    {
        path: 'layout-1',
        component: Layout1Component
    },
    {
        path: 'layout-2',
        component: Layout2Component
    },
    {
        path: 'layout-3',
        component: Layout3Component
    },
    {
        path: 'layout-4',
        component: Layout4Component
    },
    {
        path: 'layout-5',
        component: Layout5Component
    },
    {
        path: '**',
        component: Layout1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
