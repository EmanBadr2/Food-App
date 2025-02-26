import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { CategoriesModule } from './modules/categories/categories.module';


const routes: Routes = [
  { path: '', component: AdminComponent } ,

  {path:'categories' ,   //  Route--> categories module
    loadChildren: () => import('../admin/modules/categories/categories.module').then(m => m.CategoriesModule)
  } ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
