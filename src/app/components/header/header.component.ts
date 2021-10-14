import { Component, OnInit } from '@angular/core';
import { environment } from '../environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
        this.env.countryIsoCode = isoCode;

        console.log(countriesIsoCode.get(response.country)); // outputs 200
      })
      .catch((_data) => {
        console.log('Request failed');
      })
  }

}
