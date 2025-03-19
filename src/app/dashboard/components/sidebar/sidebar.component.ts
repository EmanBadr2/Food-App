import { Component, Output, EventEmitter  } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { IMenu } from 'src/app/dashboard/interFaces/imenu';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileService } from '../../services/profile.service';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() booleanChange = new EventEmitter<boolean>();
  isSidebarClick:boolean = false
  isAdmin:boolean =false ;
  isUser:boolean =false ;
  menu : IMenu[] =[]


  constructor(private _ActivatedRoute: ActivatedRoute ,
    private _ProfileService:ProfileService
    , public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('role') === 'SuperAdmin'){
      this.isAdmin=true
      this.menu=this.adminMenu
    }
    else{
      this.isUser=true
      this.menu=this.userMenu
    }
  }

  adminMenu: IMenu[] =[
     {
       title: 'Users' ,
       icon : 'fa-user-group' ,
       menuLink : '/dashboard/admin/users' ,
      } ,
     {
      title: 'Recipes' ,
      icon : ' fa-utensils' ,
      menuLink : '/dashboard/admin/recipes' ,
     } ,
     {
       title: 'Categories' ,
       icon : 'fa-table-cells' ,
       menuLink : '/dashboard/admin/categories' ,
      } ,

  ]

  userMenu: IMenu[] =[
    {
      title: 'Recipes' ,
      icon : 'fa-utensils' ,
      menuLink : '/dashboard/user/user-recipes' ,
     } ,
     {
      title: 'Favorites' ,
      icon : 'fa-heart' ,
      menuLink : '/dashboard/user/favorites' ,
     } ,

  ]
// ----------------------------------


 toggleSidebarWidth(): void {
    this.isSidebarClick = !this.isSidebarClick
    this.booleanChange.emit(this.isSidebarClick);
  }

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
