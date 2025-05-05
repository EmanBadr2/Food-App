import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddEditUsersComponent } from './components/add-edit-users/add-edit-users.component';


const routes: Routes = [
  {path:'' , component:UsersListComponent} ,
  {path:'view-edit/:id' , component:AddEditUsersComponent} ,
  {path:'view-edit/:id/:formDisabled', component:AddEditUsersComponent} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
