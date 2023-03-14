import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {useHash: true}
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
