import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipes  , IRecipesData} from '../models/recipes'


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _HttpClient:HttpClient) { }

  onGettingRecipes( recipesParams:any ):Observable<IRecipes>{
    return this._HttpClient.get<IRecipes>('Recipe' , {params :recipesParams }   )
  }

  onAddingRecipe( data:FormData):Observable<any>{
    return this._HttpClient.post(`Recipe` , data )
  }

  onGettingRecipeById(recipeId:number| null):Observable<IRecipesData>{
    return this._HttpClient.get<IRecipesData>(`Recipe/${recipeId}` )
  }

  onUpdateRecipe(recipeId:number| null , data:FormData):Observable<any>{
    return this._HttpClient.put(`Recipe/${recipeId}` , data)
  }
  onDeleteRecipe(recipeId:number| null ):Observable<any>{
    return this._HttpClient.delete(`Recipe/${recipeId}`)
  }

}
