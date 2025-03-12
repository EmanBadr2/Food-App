import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';



const
 MaterialComponents = [
      CommonModule ,
      MatIconModule ,
      MatMenuModule ,
      MatButtonModule ,
      MatDialogModule,
      MatPaginatorModule,
      MatSelectModule ,
      MatFormFieldModule ,
      MatInputModule ,



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
