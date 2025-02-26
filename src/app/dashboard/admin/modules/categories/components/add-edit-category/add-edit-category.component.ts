import { Component , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';





@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'] ,
})
export class AddEditCategoryComponent {
  animal!: string;
  name!: string;
  constructor(
    public dialogRef: MatDialogRef<AddEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog ,
  ) {}



  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( AddEditCategoryComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
}
}
