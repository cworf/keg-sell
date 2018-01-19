import { Component } from '@angular/core';
import { Keg } from './keg-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'the taproom';
  selectedKeg = null;
  masterKegs: Keg[] = [
    {name: "IPA", brand: "ninkasi", price: 6, apv: 10, pints: 12},
    {name: "Lager", brand: "rolling rock", price: 3, apv: 8, pints: 12},
    {name: "Porter", brand: "porters r us", price: 5, apv: 7, pints: 12},
    {name: "Stout", brand: "guiness", price: 5, apv: 6, pints: 12},
    {name: "Pale Ale", brand: "pyramid", price: 4, apv: 5, pints: 12}
  ];
  addedKeg = {};

  newKeg(keg: Keg){
    this.masterKegs.push(keg);
  }

  editKeg(keg) {
    console.log(keg)
    this.selectedKeg = keg;
  }
  saveKeg() {
    this.selectedKeg = null;
  }
}
