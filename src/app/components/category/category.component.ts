import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { SlugHelper } from 'src/app/helpers/slug';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[]
  currentCategory:Category;
  currentCategorySlug: string;
  dataloaded=false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {this.getCategories();
    }

  getCategories(){
this.categoryService.getCategories().subscribe(response=>
{
  this.categories=response.data;
  this.dataloaded=true;
})}



setCurrentCategory(category: Category) {
  this.currentCategory=category;
  }

getCurrentCategoryClass(category:Category)
{
  this.currentCategorySlug = SlugHelper.generateSlug(category.categoryName);
  if(category==this.currentCategory)
  {
   return "list-group-item list-group-item-action active"
  }
else
{return "list-group-item list-group-item-action"} 
}



}
