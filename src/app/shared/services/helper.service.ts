import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipes  } from '../interFaces/recipes';




@Injectable({
  providedIn: 'root'
})
export class HelperService {
 constructor(private _HttpClient:HttpClient) { }

  onGettingTags( ):Observable<any>{
    return this._HttpClient.get('tag'  )
  }

  onGettingAllCategories( data:any):Observable<any>{
    return this._HttpClient.get('Category' , {params :data}  )
  }

  

  onGettingRecipes( recipesParams:any ):Observable<IRecipes>{
      return this._HttpClient.get<IRecipes>('Recipe' , {params :recipesParams }   )
    }


}
