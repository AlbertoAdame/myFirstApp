import { Component, Input} from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent{

  constructor() { }

  @Input() nuevo = {
    name: "",
    health: 0
  }

  @Input() personajes: Character[] = [];

  addCharacter(){
    let add={
      name:this.nuevo.name,
      health:this.nuevo.health
    }
    this.personajes.push(add)
  }

}
