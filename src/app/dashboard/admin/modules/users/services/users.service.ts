import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllUsers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

   onGettingAllLoggedInUsers(allUserParams:any ):Observable<IAllUsers> {
      return this._HttpClient.get<IAllUsers>( `Users` , {params : allUserParams } )
    }
    
}
