import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';
import { AddEditRecipesComponent } from './components/add-edit-recipes/add-edit-recipes.component';
import { NoDataComponent } from 'src/app/shared/components/no-data/no-data.component';

const routes: Routes = [
  {path:'' , component:ListRecipesComponent } ,
   {path:'listRecipes' , component:ListRecipesComponent } ,

  {path:'addRecipe' , component:AddEditRecipesComponent } ,

  {path:'view-edit/:id' , component:AddEditRecipesComponent } ,
  {path:'view-edit/:id/:formDisabled' , component:AddEditRecipesComponent } ,



  { path: 'noData', component:NoDataComponent } ,


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
