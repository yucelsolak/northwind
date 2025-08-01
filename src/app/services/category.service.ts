import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

apiUrl="https://localhost:44358/api/categories/getall";

  constructor(private httpClient:HttpClient) { 

  }
  getCategories():Observable<listResponseModel<Category>>
  {
    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl)
  }
}
