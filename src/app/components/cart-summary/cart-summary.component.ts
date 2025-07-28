import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartservice:CartService) { }

  cartItems:cartItem[];

  ngOnInit(): void {
    this.getCart();
  }
getCart()
{
  this.cartItems=this.cartservice.listToCart();
}
removeCart(product:Product)
{
this.cartservice.removeFromCart(product);
}

addToCart(product:Product)
{
  if(product.unitsInStock===0)
  {

  }
  else
  {this.cartservice.addToCart(product);}
}
}
