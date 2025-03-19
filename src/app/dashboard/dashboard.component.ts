import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(){
  }


  isSidebarClick:boolean=false
  onBooleanChange(value: boolean) {
    this.isSidebarClick = value;
  }






}
