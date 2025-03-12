import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { adminGuard } from '../core/gurds/admin.guard';
import { userGuard } from '../core/gurds/user.guard';
import { NoDataComponent } from './components/no-data/no-data.component';


const routes: Routes = [
  { path: '', component: DashboardComponent ,

   children:[
      { path: '', component: HomeComponent } ,
      { path: 'no-data', component: NoDataComponent } ,


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
