import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { NotFoundComponent } from './components/not-found/not-found.component';

// import { BrowserModule } from '@angular/platform-browser';





@NgModule({
  declarations: [
    NotFoundComponent

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


    NotFoundComponent,
    
   



  ],

})
export class SharedModule { }
