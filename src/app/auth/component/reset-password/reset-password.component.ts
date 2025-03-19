
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {


  isHide:boolean =true

  resetPasswordForm  = new FormGroup({
     email : new FormControl(null , [Validators.required , Validators.email]) ,
     password: new FormControl(null , [Validators.required ,
       Validators.pattern( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/) ]) ,
     confirmPassword:new FormControl(null , [Validators.required ,
        Validators.pattern( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/) ])  ,
     seed :new FormControl(null , [Validators.required ]) ,
   });

  constructor(private _AuthService:AuthService
    ,private  _toastr: ToastrService  , private _Router:Router){}



    onSubmit(myForm : FormGroup){

        let params = myForm.value
        this._AuthService.resetPassword(params).subscribe({
          next :(res:any)=> {
             console.log(res);
             this._toastr.success(res.message);
          } ,
          error :(err:any)=> {
             console.log(err);
            this._toastr.error('Error in updating your password' )
          } ,
          complete :()=> {
              this._Router.navigate(['/auth/verifyAccount']) ;
           } ,

        })

    }

}
