import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

// ---
  receivedData: any;  // Variable to hold the received data from the child
  handleDataFromChild(data: any) {
    this.receivedData = data;  // Receive the object from the child component
  }

}
