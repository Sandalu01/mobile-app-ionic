import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"loading",pathMatch:"full"},
  {path:"loading",loadChildren:()=>import("./screen/loading/loading.module").then(m=>m.LoadingPageModule)},  {
    path: 'dashboard',
    loadChildren: () => import('./screen/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screen/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screen/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./screen/product/product.module').then( m => m.ProductPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
