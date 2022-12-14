import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character';
import { BSService } from '../services/brawl-stars.service';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent{

  constructor(private bsService:BSService) {
    
  }

  get personajes():Character[]{
    return this.bsService.personajes;
  }

}
