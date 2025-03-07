import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
AuthService
Router
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor( private _Router:Router , private _AuthService:AuthService ){}
    
  userOrAdmin(){
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') == 'SuperAdmin' ) {
      this._Router.navigate(['dashboard/admin'])
   }
   if (localStorage.getItem('userToken') !== null && localStorage.getItem('role')  == "SystemUser" ) {
    this._Router.navigate(['/user'])
 }
 else{
  console.log('lll');

 }

  }

}
