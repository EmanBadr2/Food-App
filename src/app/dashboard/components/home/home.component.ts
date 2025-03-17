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
  isAdmin:boolean=false
  isUser:boolean=false
  constructor( private _Router:Router , private _AuthService:AuthService ){}

  userOrAdmin(){
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') == 'SuperAdmin' ) {
      this.isAdmin=true
      this._Router.navigate(['dashboard/admin'])

   }
   if (localStorage.getItem('userToken') !== null && localStorage.getItem('role')  == "SystemUser" ) {
    this.isUser=true
    this._Router.navigate(['/user'])
    }
  else{
   console.log('error in Admin or User ');
   }

  }


 
}
