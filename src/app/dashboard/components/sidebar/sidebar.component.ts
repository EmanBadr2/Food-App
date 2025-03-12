import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Imenu } from 'src/app/core/interFaces/imenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private activatedRoute: ActivatedRoute) {
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
      menuLink : '/dashboard' ,
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


     {
      title: 'User Recipes' ,
      icon : 'fa-home' ,
      menuLink : '/dashboard' ,
      isActive: this.isUser() ,
     } ,
     {
      title: 'Favorites' ,
      icon : 'fa-home' ,
      menuLink : '/dashboard' ,
      isActive:  this.isUser() ,
     } ,
  ]


  isAdmin():boolean { if( localStorage.getItem('role') === 'SuperAdmin') return true ; else return false }
  isUser():boolean { return localStorage.getItem('role') === 'SystemUser'? true : false }


}
