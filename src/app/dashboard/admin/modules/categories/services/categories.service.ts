import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ICategory , getCategoryParams } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private _HttpClient:HttpClient) { }

   onGettingCategories(params:getCategoryParams):Observable<ICategory>{
    return this._HttpClient.get<ICategory>('Category' ,
      {params:{ pageSize:params.pageSize ,  pageNumber: params.pageNumber}} )
   }


}

