import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
userToken:any = localStorage.getItem('userToken')
userGroup :any = localStorage.getItem('role')

constructor(private _HttpClient:HttpClient ) {
  if (this.userToken !== null ) {
      // this.getProfile()
  }

}

 getProfile(){
  let encoded :any =  localStorage.getItem('userToken');
  let decoded :any = jwtDecode(encoded) ;
  localStorage.setItem('role' , decoded.userGroup)
 }

  login(data:FormGroup):Observable<any>{
    return this._HttpClient.post(`Users/Login` , data)
  }

  register(data:any):Observable<any>{
    return this._HttpClient.post(`Users/Register` ,data )
  }

  forgetPassword(data:any ):Observable<any>{
    return this._HttpClient.post(`Users/Reset/Request` , data)
  }

  resetPassword(data:any ):Observable<any>{
    return this._HttpClient.post(`Users/Reset/Request` , data)
  }
  verifyAccount(data:any ):Observable<any>{
    return this._HttpClient.put(`Users/verify` , data)
  }





}



