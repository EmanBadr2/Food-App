import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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


}
