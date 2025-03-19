import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName:string=''
  imagePath:string | null=''
  baseUrl:string = 'https://upskilling-egypt.com:3006/';

  constructor(private _HelperService:HelperService , private _Router:Router ,
    public dialog: MatDialog ){
    this.onGettingCurrentUser()
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


  // logOut():void{
  //    localStorage.removeItem('userToken')
  //    localStorage.removeItem('role')
  //   this._Router.navigate(['/auth'])
  // }

 onOpenChangePasswordDialog(){
    const dialogRef =  this.dialog.open(ChangePasswordComponent )
    dialogRef.afterClosed().subscribe(result =>{
      // console.log(`${result} After`);
      if(result){
        // console.log('send data');
      }
    })

  }

   onOpenLogOutDialog(){
      const dialogRef = this.dialog.open(LogoutComponent )
      dialogRef.afterClosed().subscribe(result =>{
        if(result){
        }
      })
     }


}
