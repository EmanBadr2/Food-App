import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName:string=''
  imagePath:string | null=''
  baseUrl:string = 'https://upskilling-egypt.com:3006/';
  constructor(private _HelperService:HelperService){

    this.onGettingCurrentUser()
  }

// ---
  receivedData: any;  // Variable to hold the received data from the child
  handleDataFromChild(data: any) {
    this.receivedData = data;  // Receive the object from the child component
  }




  onGettingCurrentUser(){
    this._HelperService.onGettingCurrentUser().subscribe({
      next:(res)=>{
        this.userName=res.userName
        this.imagePath=res.imagePath
        console.log(res);
      } ,
      error:(err)=>{
        console.log(err);

      }
    })
  }
}
