import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg-model';

@Component({
  selector: 'app-list-kegs',
  templateUrl: './list-kegs.component.html',
  styleUrls: ['./list-kegs.component.css']
})
export class ListKegsComponent implements OnInit {
  @Input() childKegs:Keg[];
  @Output() clickSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  apvColor(keg){
    if (keg.apv >= 9){
      return "high-alc"
    }else if (keg.apv > 6){
      return "mid-alc"
    }else {
      return "low-alc"
    }
  }

  editClicked(whichKeg: Keg){
    this.clickSender.emit(whichKeg);
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

}
