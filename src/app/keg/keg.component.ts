import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {

  kegs: Keg[] = [
    {name: "IPA", brand: "ninkasi", price: 6, apv: 5, pints: 124},
    {name: "Lager", brand: "rolling rock", price: 3, apv: 5, pints: 124},
    {name: "Porter", brand: "porters r us", price: 5, apv: 5, pints: 124},
    {name: "Stout", brand: "guiness", price: 5, apv: 5, pints: 124},
    {name: "Pale Ale", brand: "pyramid", price: 5, apv: 5, pints: 124}
  ];

  constructor() { }

  ngOnInit() {
  }

  sellPint(keg){
    if (keg.pints > 1 && keg.pints != 11) {
      keg.pints -= 1;
    } else if (keg.pints === 11) {
      alert(`buy more ${keg.name}`);
      keg.pints -= 1;
    } else {
      alert(`all out of ${keg.name}`);

    }
  }

  refillKeg(keg){
    keg.pints = 12;
  }

  newKeg(name, brand, price, apv, pints){
    this.kegs.push(new Keg(name, brand, price, apv));
    console.log(this.kegs);

  }
}
