import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(){

  }




// Method to handle data from the child
  receivedData: any;  // Variable to hold the received data from the child
  handleDataFromChild(data: any) {
    this.receivedData = data;  // Receive the object from the child component
  }


}
