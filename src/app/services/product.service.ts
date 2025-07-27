import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   apiUrl="https://localhost:44358/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<listResponseModel<Product>>{
    let newpath=this.apiUrl+"Products/getall";
  return this.httpClient.get<listResponseModel<Product>>(newpath)
  }

    getProductsByCategory(categoryId:number):Observable<listResponseModel<Product>>{
    let newpath=this.apiUrl+"Products/getbycategory?categoryId="+categoryId;

  return this.httpClient.get<listResponseModel<Product>>(newpath)
  }
}
