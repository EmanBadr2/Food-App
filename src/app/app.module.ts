import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { FormsModule } from '@angular/forms';

import { NgxFileDropModule } from 'ngx-file-drop';

import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';

import { GlobalInterceptor } from './core/interceptors/global.interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,

    CommonModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      // ToastrModule added
      closeButton:true ,
      progressBar: true ,
      timeOut:3000,
    }) ,

    NgxFileDropModule



  ],
  providers: [
    // interceptor
      {
          provide : HTTP_INTERCEPTORS ,
          useClass : GlobalInterceptor ,
          multi:true
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
