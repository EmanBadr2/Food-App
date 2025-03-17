import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {IFavRecipe , IAllFav} from '../../../shared/interFaces/recipes'

@Injectable({
  providedIn: 'root'
})
export class UserFavService {


   constructor(private _HttpClient:HttpClient) { }


   onAddToFav(id:number| null):Observable<IFavRecipe>{
    return this._HttpClient.post<IFavRecipe>(`userRecipe`, { recipeId : id })
   }

   onGettingAllFav():Observable<IAllFav>{
    return this._HttpClient.get<IAllFav>(`userRecipe`)
   }

   onDeleteFav(id:number| null):Observable<any>{
    return this._HttpClient.delete(`userRecipe/${id}`)
   }


}
