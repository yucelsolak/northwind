import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[
  ]
  dataloaded=false;
  filterText="";


  constructor(private productService:ProductService, 
    private activatedroute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartservice:CartService
  ) { }

  ngOnInit(): void {
   this.activatedroute.params.subscribe(params=>
   {
    if(params["categoryId"])
    {
      this.getProductsByCategory(params["categoryId"]);
    }
    else
    {
      this.getProducts();
    }
   }
   )
  }
getProducts(){
this.productService.getProducts().subscribe(response=>
{
  this.products=response.data;
  this.dataloaded=true;
})}

getProductsByCategory(categoryId:number){
this.productService.getProductsByCategory(categoryId).subscribe(response=>
{
  this.products=response.data;
  this.dataloaded=true;
})}

addToCart(product:Product)
{
  if(product.unitsInStock===0)
  {
this.toastrService.error("Ürün Stokta Yoktur",product.productName);
  }
  else
  {this.toastrService.success("Sepete Eklendi",product.productName);
    this.cartservice.addToCart(product);
  }
}
stockControl(product:Product)
{
  if(product.unitsInStock===0)
    return "btn btn-danger";
  else 
    
    return "btn btn-success";
}
}
