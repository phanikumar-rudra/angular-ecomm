import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product){
    //this.cart.set([...this.cart(), product]);
    this.cart.update(cart => [...cart, product]);
    console.log(this.cart());
  }

  constructor() { }
}
