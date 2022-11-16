import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character';
import { AddCharacterComponent } from '../add-character/add-character.component';

@Injectable()
export class BSService{

    private _personajes = [
        {name : "Shelly", health: 50},
        {name : "Colt", health: 1050},
        {name : "Nita", health: 2050},
        {name : "ElPrimo", health: 3050}
    ]

    constructor(){
        console.log('Servicio iniciado')
    }

    get personajes():Character[]{
        return [...this._personajes];
    }

    AddCharacter(character:Character){
        this._personajes.push(character);
    }
}


