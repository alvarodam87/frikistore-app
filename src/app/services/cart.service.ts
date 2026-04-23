import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<any[]>([]);
  public showNotification = signal(false);
  public lastAddedItem = signal('');

  getCart() { return this.items(); }
  getCartCount() { return this.items().length; }

  getTotalPrice() {
    return this.items().reduce((acc, item) => acc + item.price, 0);
  }

  addToCart(product: any) {
    this.items.update(prev => [...prev, product]);
    this.lastAddedItem.set(product.name);
    this.showNotification.set(true);
    setTimeout(() => this.showNotification.set(false), 3000);
  }

  removeItem(index: number) {
    this.items.update(prev => prev.filter((_, i) => i !== index));
  }

  clearCart() {
    this.items.set([]);
  }
}
