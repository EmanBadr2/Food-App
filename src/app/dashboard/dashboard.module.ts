import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SharedModule } from "../shared/shared.module";
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { MaterialModule } from '../material/material.module';
import { NoDataComponent } from '../shared/components/no-data/no-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent ,
    SidebarComponent ,
     NavbarComponent,
     DeleteItemComponent,
     NoDataComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule ,
    MaterialModule
] ,
exports :[
  NoDataComponent

]

})
export class DashboardModule { }
