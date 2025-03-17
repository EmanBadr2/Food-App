import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/shared/services/helper.service';

import { ToastrService } from 'ngx-toastr';
import { Router , ActivatedRoute } from '@angular/router';

import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { UserFavService } from '../services/user-fav.service';
import { IRecipes , IAllFav , IFavRecipe, IRecipesData , ICategoriesAndTags  } from 'src/app/shared/interFaces/recipes';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favDetails !:IAllFav ;
  favList :IFavRecipe[]=[] ;

  baseUrl:string = 'https://upskilling-egypt.com:3006/';
  length !: number ;


      searchName: string = '' ;
      tagId:number = 0 ;
      categoryId:number = 0 ;
      tagList : ICategoriesAndTags[] =[] ;
      categoriesList: ICategoriesAndTags[] =[] ;


  constructor(private _HelperService:HelperService , private _UserFavService:UserFavService ,
    private _ToastrService:ToastrService , public dialog: MatDialog ,
    private _Router: Router ){

 }

  ngOnInit(): void {
    this.onGettingTags()
    this.onGettingAllCategories()
    this.onGettingAllFav()
   }

   onGettingAllFav(){
    this._UserFavService.onGettingAllFav().subscribe({
      next :(res)=>{
        console.log(res);
        this.favDetails=res
        this.favList= res.data
        this.length=res.totalNumberOfRecords


        if(res.data.length ==0){
          console.log( 'Create component for empty Data');
        }

       } ,
      error :(err)=>{
        console.log(err);
      } ,
      complete :()=>{ } ,

    })
   }

   onDeleteFav(id: number| null){
    this._UserFavService.onDeleteFav(id).subscribe({
      next :(res)=>{
        console.log(res);
       } ,
      error :(err)=>{
        console.log(err);
      } ,
      complete :()=>{
        this._ToastrService.success('this Item has been successfully removed from Fav')
        this.onGettingAllFav()
      } ,

    })
    // alert(id)
   }


  //  Filter By  Tag && AllCategories
  onGettingTags():void {
    this._HelperService.onGettingTags().subscribe({
      next:(res)=>{
        this.tagList = res ;
      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })
  }
  onGettingAllCategories():void{
    const categoriesParams ={ pageSize:500 ,  pageNumber : 1 }
    this._HelperService.onGettingAllCategories(categoriesParams).subscribe({
      next:(res)=>{
        this.categoriesList= res.data ;
      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })

  }
  clearFilters():void{
    this.searchName = ''
    this.tagId = 0
    this.categoryId = 0
    // this.showNoData = false
   this.onGettingAllFav()
  }




   // paginator
//  handelPageEvent(event:PageEvent){
//    this.favDetails.pageSize =  event.pageSize
//    this.favDetails.pageNumber = event.pageIndex+1 ,
//    this.length = event.length
//    this.onGettingAllFav( )
//   }




}
