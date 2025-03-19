
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private _AuthService:AuthService
      ,private  _toastr: ToastrService  , private _Router:Router){}

  isHide:boolean =true

 loginForm  = new FormGroup({
     email : new FormControl(null , [Validators.required , Validators.email]) ,
     password: new FormControl(null , [Validators.required ,
       Validators.pattern( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)])
   });

sendData(myForm : FormGroup){
    // console.log (myForm.value);
   this._AuthService.login(myForm.value).subscribe({
    next :(res:any)=> {
      localStorage.setItem('userToken' , res.token )
      this._AuthService.getProfile()

     } ,
     error :(err:any)=> { console.log(err);
      this._toastr.error(err.error.message , 'Error ')
     } ,
    complete :()=> {
       this._toastr.success('YouR Logging is ', 'Success');
       this._Router.navigate(['/dashboard']) ;
     } ,
   })
  }


}
