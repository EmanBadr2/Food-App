import {Component,  Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ProfileService } from '../../services/profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {


    constructor(   @Inject(MAT_DIALOG_DATA) public data:any ,
      public dialogRef: MatDialogRef<ChangePasswordComponent> ,
    private _ToastrService:ToastrService , public dialog: MatDialog , private _ProfileService:ProfileService
    ){ }



    isHide :boolean =false
     changePasswordForm:FormGroup= new FormGroup({
        oldPassword: new FormControl(null),
        newPassword: new FormControl(null),
        confirmNewPassword: new FormControl(null),
      })

      sendData(data:any){
        console.log(  'call aoi');
        this.onOpenChangePassword(data.value)
      }

      onOpenChangePassword(data:any):void{
        this._ProfileService.onChangeUserPassWord(data).subscribe({
          next :(res)=>{
            console.log(res);
         } ,
         error :(err)=>{
          this._ToastrService.error( 'Error in Update Password' )} ,
         complete :()=>{
            this._ToastrService.success(`Password Updated Successfully`)
            this.onCloseDialog()
          } ,
        })
      }


   onCloseDialog():void{
      this.dialogRef.close();
      console.log('Close');
     }

}
