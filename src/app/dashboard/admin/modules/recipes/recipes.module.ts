import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';


import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';
import { AddEditRecipesComponent } from './components/add-edit-recipes/add-edit-recipes.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

import { DashboardModule } from 'src/app/dashboard/dashboard.module';



@NgModule({
  declarations: [
    ListRecipesComponent,
    AddEditRecipesComponent
  ],


    imports: [
      CommonModule,
      RecipesRoutingModule ,

      SharedModule ,
      MaterialModule ,

      DashboardModule


    ] ,
})
export class RecipesModule { }
