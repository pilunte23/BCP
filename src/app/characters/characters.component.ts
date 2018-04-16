import { Component, OnInit,  Input } from '@angular/core';
import { HEROESBASE } from '../mock-heroes';
import { HEROESADDON } from '../mock-heroes';
import { VILLAINSBASE } from '../mock-villains';
import { VILLAINSADDON } from '../mock-villains';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() characterType: String;
  charactersBase = new Array;
  charactersAddon = new Array;
  characters=new Array;
  checkboxAddon:boolean = true;
  selectedCharacter: Character;

  constructor() { 

  }

  ngOnInit() {
    
    if(this.characterType == "Herotype")
    {
      this.charactersBase = HEROESBASE
      this.charactersAddon = HEROESADDON
    }else
    {
      this.charactersBase = VILLAINSBASE
      this.charactersAddon = VILLAINSADDON
    }
    this.updateCharacters()
  }

  updateCharacters(){
    if (this.checkboxAddon) 
    { this.characters = this.charactersBase.concat(this.charactersAddon)}
    else
    {this.characters = this.charactersBase}
    ;
  }

  onSelect(character: Character): void {
    this.selectedCharacter= character;
  }
}
