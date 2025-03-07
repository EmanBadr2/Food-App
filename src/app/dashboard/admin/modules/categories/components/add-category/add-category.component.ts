import {Component,  Inject} from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'] ,
})
export class AddCategoryComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
   public dialogRef: MatDialogRef<AddCategoryComponent> ){ }


   onCloseDialog():void{
    this.dialogRef.close({data: this.data.name});
   }

   





}
