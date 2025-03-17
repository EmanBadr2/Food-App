import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { NoDataComponent } from './components/no-data/no-data.component';




@NgModule({
  declarations: [
    NoDataComponent

  ],
  imports: [
    CommonModule ,
    RouterModule ,

    HttpClientModule ,
    MaterialModule ,

    FormsModule,
    ReactiveFormsModule ,

    NgxDropzoneModule ,


  ] ,
  exports: [
    RouterModule ,

    HttpClientModule ,
    MaterialModule ,

    FormsModule,
    ReactiveFormsModule,

    NgxDropzoneModule ,




  ],

})
export class SharedModule { }
