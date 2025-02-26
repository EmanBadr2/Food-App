import { Component  , inject } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import {ICategory, ICategoriesData, getCategoryParams  , DialogData} from './../../models/categories';


import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';
import { MaterialModule } from 'src/app/material/material.module';



@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  constructor(private _CategoriesService:CategoriesService ,
       public dialogRef: MatDialogRef<AddEditCategoryComponent>,
        public dialog: MatDialog  ){
    this.onGetCategoriesData()
  }
  animal!: string;
  name!: string;

  tableParams :getCategoryParams = { pageSize : 10 , pageNumber: 1} ;
  categoriesList!:ICategoriesData[];

  onGetCategoriesData(){
    this._CategoriesService.onGettingCategories(this.tableParams).subscribe({
      next :(res)=>{
         console.log(res);
         this.categoriesList = res.data
         console.log( this.categoriesList);

          // debugger
      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })
  }
  onOpenAddEditDialog(){

    // openDialog(): void {
    //   const dialogRef = this.dialog.open(AddEditCategoryComponent, {
    //     data: {name: this.name, animal: this.animal},
    //   });


  }
// dialogRef.afterClosed().subscribe(result => {
//         console.log('The dialog was closed');
//         this.animal = result;
//       });

}
