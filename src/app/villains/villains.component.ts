import { Component, OnInit } from '@angular/core';
import { VILLAINSBASE } from '../mock-villains';
import { VILLAINSADDON } from '../mock-villains';
@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains = VILLAINSBASE
  checkboxArkhamAsylum:boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  updateVillains(){
    if (this.checkboxArkhamAsylum) 
    { this.villains = VILLAINSBASE.concat(VILLAINSADDON)}
    else
    {this.villains = VILLAINSBASE}
     ;
  }

}
