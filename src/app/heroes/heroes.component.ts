import { Component, OnInit } from '@angular/core';
import { HEROESBASE } from '../mock-heroes';
import { HEROESADDON } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes;
  checkboxFlag:boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.checkboxFlag) 
    { this.heroes = HEROESBASE.concat(HEROESADDON)}
    else
    {this.heroes = HEROESBASE}
     ;
  }

}
