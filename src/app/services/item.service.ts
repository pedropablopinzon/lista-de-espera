
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      compiled: false
    },
    {
      id: 1,
      title: 'pan',
      price: 3.5,
      quantity: 8,
      compiled: true
    },
    {
      id: 2,
      title: 'chamarra',
      price: 3.5,
      quantity: 8,
      compiled: false
    }
  ];

  constructor() { }

  getItems() {
    return this.items
  }

  addItem(item: Item) {
    this.items.unshift(item);
    console.log(this.items);
  }
}
