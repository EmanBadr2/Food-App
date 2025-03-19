import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IUser} from '../admin/modules/users/models/users'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private _HttpClient:HttpClient , private _Router:Router) { }

  onGettingCurrentUser():Observable<IUser>{
      return this._HttpClient.get<IUser>(`Users/currentUser` )
    }

    onUpdatingCurrentUser(data : FormData):Observable<IUser>{
      return this._HttpClient.put<IUser>(`Users` , data )
    }

    onChangeUserPassWord(data : any ):Observable<any>{
      return this._HttpClient.put(`Users/ChangePassword` , data )
    }

    logOut():void{
      localStorage.removeItem('userToken')
      localStorage.removeItem('role')
      this._Router.navigate(['/auth'])
    }




}
