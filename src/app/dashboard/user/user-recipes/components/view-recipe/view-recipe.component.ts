
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {  IRecipesData} from 'src/app/shared/interFaces/recipes';


@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent {

  constructor(
    public dialogRef: MatDialogRef<ViewRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {

    this.mydata=data
    console.log('mydata' , this.mydata);
  }


  mydata:IRecipesData
  baseUrl:string = 'https://upskilling-egypt.com:3006/';

  onCloseDialog(){
    this.dialogRef.close( )
  }



}
