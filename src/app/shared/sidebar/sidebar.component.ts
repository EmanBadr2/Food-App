import { Component } from '@angular/core';

import { Imenu } from 'src/app/core/interFaces/imenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(){}

  menu : Imenu[] =[
    {
     title: 'home' ,
     icon : 'fa-home' ,
     menuLink : '/dashboard' ,
     isActive: true,
    } ,
    {
      title: 'Users' ,
      icon : 'fa-Users' ,
      menuLink : '/dashboard' ,
      isActive:this.isAdmin() ,
     } ,
    {
     title: 'Recipes' ,
     icon : 'fa-home' ,
     menuLink : '/dashboard' ,
     isActive: this.isAdmin()  ,
    } ,

    {
      title: 'Categories' ,
      icon : 'fa-home' ,
      menuLink : '/dashboard' ,
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
