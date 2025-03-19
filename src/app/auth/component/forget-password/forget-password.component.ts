import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  model = { email: '' };
  constructor( private _AuthService:AuthService
     ,private  _toastr: ToastrService  , private _Router:Router
  ){}



  onSubmit() {
    // console.log('Form Submitted!', this.model);
    this.forgetPassWord(this.model)
  }
  
  forgetPassWord(data:any){
    // console.log(data);
    this._AuthService.forgetPassword(data).subscribe({
      next :(res)=>{
        this._toastr.success(res.message)
      } ,
      error :(err)=>{
        console.log(err);
        this._toastr.error('Enter valid email ')
      } ,
      complete :()=>{
        this._Router.navigate(['/auth/resetPassword'])
      }
    })
  }

}
