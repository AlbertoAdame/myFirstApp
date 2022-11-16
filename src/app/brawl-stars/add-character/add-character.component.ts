import { Component, Input} from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent{

  constructor(private bsService:BBS) { 
    console.log('Constructor  add character')
  }

 

  @Input() nuevo: Character = { name: '', health:0};

  addCharacter(){
    this.bsService.a
    this.personajes.push(add)
  }

}
