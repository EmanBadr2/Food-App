
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent {

  isHide:boolean=false
    verifyForm  = new FormGroup({
       email : new FormControl(null , [Validators.required , Validators.email]) ,
       code :new FormControl(null , [Validators.required ]) ,
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
          this._toastr.error('Error ' )
        } ,
        complete :()=> {
            this._Router.navigate(['/auth']) ;
         } ,

      })

  }


}
