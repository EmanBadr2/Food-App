import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';


import { RegisterComponent } from './component/register/register.component';
import { AuthComponent } from './component/auth/auth.component';

// import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
// import { BaseUrlInterceptor } from './base-url.interceptor';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { VerifyAccountComponent } from './component/verify-account/verify-account.component';





@NgModule({
  declarations: [

    AuthComponent ,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerifyAccountComponent ,
    
  ],
  imports: [

    CommonModule,
    AuthRoutingModule  ,

    ReactiveFormsModule  ,

    NgxFileDropModule ,



     SharedModule
    // HttpClientModule
  ] ,
  providers :[ ]
})
export class AuthModule { }
