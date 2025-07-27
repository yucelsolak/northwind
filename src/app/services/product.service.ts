import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   apiUrl="https://localhost:44358/api/Products/getall";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<productResponseModel>{
  return this.httpClient.get<productResponseModel>(this.apiUrl)
  }
}
