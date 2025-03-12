import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import {ICategory, ICategoriesData, getCategoryParams } from './../../models/categories';

import { AddCategoryComponent } from '../add-category/add-category.component';
import { DeleteItemComponent } from 'src/app/dashboard/components/delete-item/delete-item.component';

import { ToastrService } from 'ngx-toastr';

import { MatDialog } from '@angular/material/dialog';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  constructor(private _CategoriesService:CategoriesService , public dialog: MatDialog
    , private _ToastrService:ToastrService ){
      this.onGetCategoriesData()
  }

  tableParams :getCategoryParams = { pageSize : 4 , pageNumber: 1} ;
  categoriesList!:ICategoriesData[];
  length !: number ;

  onGetCategoriesData(){
    this._CategoriesService.onGettingCategories(this.tableParams).subscribe({
      next :(res)=>{
           this.categoriesList = res.data
           this.length= res.totalNumberOfRecords
           this.tableParams.pageSize=res.pageSize
           this.tableParams.pageNumber=res.pageNumber
      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })
  }

// -----
  onOpenAddDialog(){
    const dialogRef =  this.dialog.open(AddCategoryComponent, {data:{name:''}})
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.onAddCategory(result)
      }
    })
  }

  onAddCategory(categoryName:object|undefined){
    this._CategoriesService.onAddCategory(categoryName).subscribe({
      next :(res)=>{
        this.onGetCategoriesData()
        this._ToastrService.success(`Category ${res.name} Added Successfully`)
     } ,
     error :(err)=>{ this._ToastrService.error( 'Error in create Category' )} ,
     complete :()=>{ } ,
    })

  }
// --------

  onOpenEditDialog(category:ICategoriesData){
    let categoryId: number | undefined = category.id
    let  oldCategoryName  = category.name
    let  newCategoryName

    const dialogRef = this.dialog.open(AddCategoryComponent ,{ data:{ name : oldCategoryName} }) ;
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
          newCategoryName = result
         this.onEditCategory(categoryId , newCategoryName)
      }
    })

  }

  onEditCategory(categoryId:number| undefined , updateCategoryName:object | undefined){

    this._CategoriesService.onUpdateCategory(categoryId , updateCategoryName ).subscribe({
      next :(res)=>{
        this.onGetCategoriesData()
        this._ToastrService.success(`Category ${res.name} Updated Successfully`)
     } ,
     error :(err)=>{ this._ToastrService.error( 'Error in Update Category' )} ,
     complete :()=>{ } ,
    })


  }

// ------------

  onOpenViewDialog(category:ICategoriesData){
    const dialogRef = this.dialog.open(AddCategoryComponent ,
      { data: { name : category.name  , isReadOnly:true}  }) ;
  }

// ----------

  onOpenDeleteDialog(category:ICategoriesData){
    const dialogRef =  this.dialog.open(DeleteItemComponent, {data:{name:category.name , id:category.id }})
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
      if(result){
        this.onDeleteCategory(category.id)
      }
    })

  }

  onDeleteCategory(categoryId:number| undefined ){
    this._CategoriesService.onDeleteCategory(categoryId).subscribe({
      next :(res)=>{
        this.onGetCategoriesData()
        this._ToastrService.success(`Category  Deleted Successfully`)
     } ,
     error :(err)=>{ this._ToastrService.error( 'Error in Delete Category' )} ,
     complete :()=>{ } ,
    })
  }

// ---------------------

 handelPageEvent(event:PageEvent){
  this.tableParams = {
    pageNumber: event.pageIndex+1 ,
    pageSize : event.pageSize
  }
  this.length = event.length
  this.onGetCategoriesData()
  }

}

