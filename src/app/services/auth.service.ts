import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/token.Model';
import { singleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

apiUrl="https://localhost:44358/api/auth";

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel)
  {
   return this.httpClient.post<singleResponseModel<TokenModel>>(this.apiUrl+"/login",loginModel);
  }

  isAuthenticated()
  {
    if(localStorage.getItem("token"))
    {return true}
    else
    {return false}
  }
}
