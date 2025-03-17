import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IUser} from '../admin/modules/users/models/users'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private _HttpClient:HttpClient) { }

  onGettingCurrentUser():Observable<IUser>{
      return this._HttpClient.get<IUser>(`Users/currentUser` )
    }

    onUpdatingCurrentUser(data : FormData):Observable<IUser>{
      return this._HttpClient.put<IUser>(`Users` , data )
    }

    onChangeUserPassWord(data : any ):Observable<any>{
      return this._HttpClient.put(`Users/ChangePassword` , data )
    }




}
