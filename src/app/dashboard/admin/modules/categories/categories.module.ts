import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';

import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListCategoriesComponent,
    AddCategoryComponent ,


  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule ,

    HttpClientModule ,
    MaterialModule ,

    FormsModule,

  ] ,
  // exports:[
  //   MaterialModule ,
  // ]

})
export class CategoriesModule { }
