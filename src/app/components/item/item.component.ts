
import { getLocaleCurrencyName } from '@angular/common';
import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/models/item';
import { environment } from '../environment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();


  countryIsoCode = 'Q';
  env = environment;
  
  constructor() { }


  ngOnInit(): void {
    const countriesIsoCode = new Map<string, string>();
    countriesIsoCode.set('Cuba', 'CUC');
    countriesIsoCode.set('Guatemala', 'GTQ');
    countriesIsoCode.set('Canada', 'CAD');



    fetch('https://extreme-ip-lookup.com/json/')
      .then(res => res.json())
      .then(response => {
        console.log("Country: ", response.country);

        let isoCode: string | undefined = countriesIsoCode.get(response.country);
        if (isoCode === undefined) {
          isoCode = 'Q';
        }
       this.countryIsoCode = isoCode;

        console.log(countriesIsoCode.get(response.country)); // outputs 200
      })
      .catch((_data) => {
        console.log('Request failed');
      })
  }

  onDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  onToggle(item: Item) {
    item.compiled = !item.compiled;
    this.toggleItem.emit(item);
  }
}
