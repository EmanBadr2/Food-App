import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';

import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ListCategoriesComponent,
    AddCategoryComponent ,

  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule ,

    SharedModule ,
    MaterialModule ,
    
  ]

})
export class CategoriesModule { }
