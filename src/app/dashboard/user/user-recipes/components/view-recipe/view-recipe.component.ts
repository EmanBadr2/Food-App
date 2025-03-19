
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {  IRecipesData} from 'src/app/shared/interFaces/recipes';
import { UserFavService } from '../../../services/user-fav.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent {

  mydata:IRecipesData
  baseUrl:string = 'https://upskilling-egypt.com:3006/';

  constructor(
    public dialogRef: MatDialogRef<ViewRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
     private _UserFavService:UserFavService ,
     private _ToastrService:ToastrService
  ) {

    this.mydata=data
    console.log('mydata' , this.mydata);
  }


  onCloseDialog(){
    this.dialogRef.close( )
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
        this.onCloseDialog()
       } ,

    })
   }




}
