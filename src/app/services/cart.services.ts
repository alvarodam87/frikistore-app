import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { name: string; price: number; img: string }[] = [];

  showNotification = signal(false);
  lastAddedItem = signal('');

  getCart() {
    return this.cart;
  }

  addToCart(item: { name: string; price: number; img: string }) {
    this.cart.push(item);
    this.lastAddedItem.set(item.name);
    this.showNotification.set(true);
    setTimeout(() => this.showNotification.set(false), 3000);
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  getCartCount() {
    return this.cart.length;
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
