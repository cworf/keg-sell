import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg-model';
@Component({
  selector: 'keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent implements OnInit {
  @Input() childSelectedKeg: Keg;
  @Output() resetSend = new EventEmitter();

  saveKegClicked(){
    this.resetSend.emit();
  }
  constructor() { }

  ngOnInit() {
  }
}
