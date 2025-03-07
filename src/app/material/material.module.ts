import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


const
 MaterialComponents = [
      CommonModule ,
      MatIconModule ,
      MatMenuModule ,
      MatButtonModule ,
      MatDialogModule,
      MatPaginatorModule,
    ]
@NgModule({
    imports: [
       MaterialComponents
    ] ,
    exports: [
       MaterialComponents
    ],
})
export class MaterialModule { }
