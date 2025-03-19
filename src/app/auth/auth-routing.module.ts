import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './component/register/register.component';
import { AuthComponent } from './component/auth/auth.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { VerifyAccountComponent } from './component/verify-account/verify-account.component';


const routes: Routes = [
  { path: '', component: AuthComponent } ,
  { path: 'register', component: RegisterComponent } ,
  { path: 'forget', component: ForgetPasswordComponent } ,
  { path: 'resetPassword', component: ResetPasswordComponent } ,
  { path: 'verifyAccount', component: VerifyAccountComponent } ,




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
