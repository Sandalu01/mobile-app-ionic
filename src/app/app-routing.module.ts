import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"loading",pathMatch:"full"},
  {path:"loading",loadChildren:()=>import("./screen/loading/loading.module").then(m=>m.LoadingPageModule)},  {
    path: 'dashboard',
    loadChildren: () => import('./screen/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
