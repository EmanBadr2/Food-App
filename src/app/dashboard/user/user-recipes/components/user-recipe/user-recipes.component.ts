import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/shared/services/helper.service';


import { ToastrService } from 'ngx-toastr';
import { Router , ActivatedRoute } from '@angular/router';

import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { UserFavService } from '../../../services/user-fav.service';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';
import { IRecipes   , ICategoriesAndTags , IRecipesData} from 'src/app/shared/interFaces/recipes';
import { NoDataComponent } from 'src/app/dashboard/components/no-data/no-data.component';



@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent  implements OnInit{


    showNoData:boolean=false ;

    baseUrl:string = `https://upskilling-egypt.com:3006/`;
    length !: number ;
    recipesList :IRecipesData[] =[] ;
    tagList : ICategoriesAndTags[] =[] ;
    categoriesList: ICategoriesAndTags[] =[] ;
    searchName: string = '' ;
    tagId:number = 0 ;
    categoryId:number = 0 ;
    recipesDetails : any = { pageSize:10 , pageNumber:1  }

  constructor(private _HelperService:HelperService , private _UserFavService:UserFavService ,
    private _ToastrService:ToastrService , public dialog: MatDialog ,
    private _Router: Router ){
     this.onGettingRecipesData( ) ;
 }


  ngOnInit(): void {
    this.onGettingTags() ;
    this.onGettingAllCategories()
   }

   // Show Data in Table
   onGettingRecipesData():void{
     const recipesParams = {
       pageSize: this.recipesDetails.pageSize ,       //required
       pageNumber: this.recipesDetails.pageNumber ,   //required
       name:this.searchName ,                         //filter
       tagId : this.tagId ,                           //filter
       categoryId:this.categoryId ,                    //filter
     }

     this._HelperService.onGettingRecipes( recipesParams).subscribe({
       next :(res)=>{
         if(res.data.length ==0){
           this.showNoData=true
           console.log( 'Create component for empty Data');
         }
          // console.log(res);
             this.recipesList= res.data
            this.length= res.totalNumberOfRecords
             this.recipesDetails.pageSize=res.pageSize
             this.recipesDetails.pageNumber=res.pageNumber

       } ,
       error :()=>{ } ,
       complete :()=>{ } ,
     })

     if(this.recipesList.length>0){
       this.showNoData=false
     }

   }



   onAddToFav(id:null| number){

    this._UserFavService.onAddToFav(id).subscribe({
      next :(res)=>{
        console.log(res);

       } ,
      error :(err)=>{
        console.log(err);
        this._ToastrService.success(' Failed in Added to Fav')

       } ,
      complete :()=>{
        this._ToastrService.success(' this Recipe Added to Fav Successfully')
       } ,

    })
   }


   onOpenViewDialog(data : IRecipesData){
    console.log(data);
    const dialogRef = this.dialog.open(ViewRecipeComponent , {data :data} )
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
      if(result){
        console.log(result);
        //call

      }

    })
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
    this.showNoData = false
    this.onGettingRecipesData()
  }


  // paginator
 handelPageEvent(event:PageEvent){
  this.recipesDetails = {
     pageNumber: event.pageIndex+1 ,
     pageSize: event.pageSize
  }
  this.length = event.length
  this.onGettingRecipesData( )
  }



}
