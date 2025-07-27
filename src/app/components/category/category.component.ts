import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryResponseModel } from 'src/app/models/categoryResponseModel';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=
  []
apiUrl="https://localhost:44358/api/Categories/getall";
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {this.getProducts();
    }
  getProducts(){
  this.httpClient.get<CategoryResponseModel>(this.apiUrl)
  .subscribe((response)=>{
    this.categories=response.data;
  })
  }

}
