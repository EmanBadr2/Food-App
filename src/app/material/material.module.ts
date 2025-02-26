import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],

    imports: [
      CommonModule ,
      MatIconModule ,
      MatMenuModule ,
      MatButtonModule ,
      MatDialogModule,
    ] ,
    exports: [

      MatIconModule ,
      MatMenuModule ,
      MatButtonModule ,
      MatDialogModule,



        MatFormFieldModule,
          MatInputModule,
          FormsModule,
          MatButtonModule,
          NgIf,
          MatDialogModule,

    ],
})
export class MaterialModule { }
