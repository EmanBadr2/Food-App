import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './component/register/register.component';

// import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
// import { BaseUrlInterceptor } from './base-url.interceptor';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';




@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule  ,

    ReactiveFormsModule  ,

    NgxFileDropModule ,

    // HttpClientModule
  ] ,
  providers :[ ]
})
export class AuthModule { }
