import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecipesRoutingModule } from './user-recipes-routing.module';
import { UserRecipesComponent } from './user-recipes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoDataComponent } from 'src/app/shared/components/no-data/no-data.component';



@NgModule({
  declarations: [
    UserRecipesComponent
  ],
  imports: [
    CommonModule,
    UserRecipesRoutingModule ,
    MaterialModule ,
    SharedModule ,
  ]
})
export class UserRecipesModule { }
