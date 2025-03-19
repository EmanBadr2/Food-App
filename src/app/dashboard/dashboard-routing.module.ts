import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { adminGuard } from '../core/gurds/admin.guard';
import { userGuard } from '../core/gurds/user.guard';


import { ProfileComponent } from './components/profile/profile.component';
import { NoDataComponent } from './components/no-data/no-data.component';



const routes: Routes = [
  { path: '', component: DashboardComponent ,

   children:[
      { path: '', component: HomeComponent } ,

      { path: 'profile', component: ProfileComponent } ,
      { path: 'home', component: HomeComponent } ,

      { path: 'noDta', component: NoDataComponent } ,


      { path: 'admin',
      canActivate:[adminGuard] ,
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },

     { path: 'user',
      canActivate:[userGuard] ,
      loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
