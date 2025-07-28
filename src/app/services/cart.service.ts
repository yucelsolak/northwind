import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';
import { cartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
  }
  
  addToCart(product:Product)
  {
    let item=CartItems.find(c=>c.product.productId===product.productId)
    if(item)
    {item.quantity+=1;}
    else
    {
      let CartItem=new cartItem();
    CartItem.product=product;
    CartItem.quantity=1;
      CartItems.push(CartItem)
    }
  }
removeFromCart(product:Product)
{
      let item=CartItems.find(c=>c.product.productId===product.productId)
    if(item)
    {if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      CartItems.splice(CartItems.indexOf(item), 1);
    }}
}
  listToCart()
  {
    return CartItems;
  }
}
