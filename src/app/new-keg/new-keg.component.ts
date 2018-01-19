import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg-model';

@Component({
  selector: 'new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {

  @Input() childNewKeg:Keg;
  @Output() sendNew = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitForm(name, brand, price, apv){
    var newKegToAdd: Keg = new Keg(name, brand, price, apv);
    this.sendNew.emit(newKegToAdd);
    console.log(newKegToAdd);
  }
}
