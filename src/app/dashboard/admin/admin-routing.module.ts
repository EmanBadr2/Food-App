import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { CategoriesModule } from './modules/categories/categories.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { UsersModule } from '../admin/modules/users/users.module';




const routes: Routes = [
  { path: '', component: AdminComponent } ,

  {path:'categories' ,   //  Route--> categories module
    loadChildren: () => import('../admin/modules/categories/categories.module').then(m => m.CategoriesModule)
  } ,

  {path:'recipes' ,   //  Route--> recipes module
    loadChildren: () => import('../admin/modules/recipes/recipes.module').then(m => m.RecipesModule)
  } ,
  {path:'users' ,   //  Route--> users module
    loadChildren: () => import('../admin/modules/users/users.module').then(m => m.UsersModule)
  } ,


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
