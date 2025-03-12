import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from '../admin/modules/users/components/users-list/users-list.component';




@NgModule({
declarations:[
  
],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
