import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router , ActivatedRoute } from '@angular/router';

import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Imenu } from 'src/app/core/interFaces/imenu';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileService } from '../../services/profile.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isHideText:boolean = false ;


  constructor(private activatedRoute: ActivatedRoute ,private _ToastrService:ToastrService
    , public dialog: MatDialog , private _ProfileService:ProfileService
  ) {
  //  this.sendDataToParent()
  // title from url to access  active class


   }



  menu : Imenu[] =[
    {
     title: 'home' ,
     icon : 'fa-home' ,
     menuLink : '/dashboard/home' ,
     isActive: true,
    } ,
    {
      title: 'Users' ,
      icon : 'fa-user-group' ,
      menuLink : '/dashboard/admin/users' ,
      isActive:this.isAdmin() ,
     } ,
    {
     title: 'Recipes' ,
     icon : ' fa-utensils' ,
     menuLink : '//dashboard/admin/recipes' ,
     isActive: this.isAdmin()  ,
    } ,
    {
      title: 'Categories' ,
      icon : 'fa-table-cells' ,
      menuLink : '/dashboard/admin/categories' ,
      isActive: this.isAdmin()  ,
     } ,


    //  {
    //   title: 'Change Password' ,
    //   icon : 'fa-unlock-keyhole' ,
    //   menuLink : '/dashboard/admin/users' ,
    //   isActive:this.isAdmin() ,
    //  } ,
    //  {
    //   title: 'LogOut' ,
    //   icon : 'fa-right-from-bracket' ,
    //   menuLink : '/auth' ,
    //   isActive:this.isAdmin() ,

    //  } ,
     // ----------------------------

     {
      // user Recipes
      title: 'Recipes' ,
      icon : 'fa-utensils' ,
      menuLink : '/dashboard/user/user-recipes' ,
      isActive: this.isUser() ,
     } ,
     {
      title: 'Favorites' ,
      icon : 'fa-heart' ,
      menuLink : '/dashboard/user/favorites' ,
      isActive:  this.isUser() ,
     } ,




  ]


  isAdmin():boolean { return localStorage.getItem('role') === 'SuperAdmin'? true : false  }
  isUser():boolean { return localStorage.getItem('role') === 'SystemUser'? true : false }
// ----------------------------------

 onOpenChangePasswordDialog(){
    console.log("hey");
    const dialogRef =  this.dialog.open(ChangePasswordComponent  )
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`${result} After`);
      if(result){
        console.log('send data');
      }
    })

  }






// -----------------------------------

  onHide(){
    this.isHideText=!this.isHideText;
   this.sendDataToParent()
  }


  @Output() dataToParent = new EventEmitter<any>();  // Using 'any' type for an object
  sendDataToParent() {
    const data = {
      isHide: this.isHideText ,

    };
    this.dataToParent.emit(data);  // Emit the object containing multiple data points
  }
  // --------------------------------------------------

}
