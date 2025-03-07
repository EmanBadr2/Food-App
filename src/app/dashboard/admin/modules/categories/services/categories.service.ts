import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ICategory , ICategoriesData , getCategoryParams } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private _HttpClient:HttpClient) { }

   onGettingCategories(params:getCategoryParams):Observable<ICategory>{
    return this._HttpClient.get<ICategory>('Category' ,
      {params:{ pageSize:params.pageSize ,  pageNumber: params.pageNumber}} )
   }

   onAddCategory(categoryName:object | undefined ):Observable<ICategoriesData>{
    return this._HttpClient.post<ICategoriesData>('Category' , categoryName)
   }

   onUpdateCategory( id:number| undefined  , data: object | undefined ):Observable<any>{
    return this._HttpClient.put(`Category/${id}` , data )
   }

   onDeleteCategory( id:number| undefined  ):Observable<any>{
    return this._HttpClient.delete(`Category/${id}` )
   }



}

