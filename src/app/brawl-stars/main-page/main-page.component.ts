import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() { }


  nuevo = {
    name: "",
    health: 0
  }

    personajes = [
        {name : "Shelly", health: 50},
        {name : "Colt", health: 1050},
        {name : "Nita", health: 2050},
        {name : "ElPrimo", health: 3050}
    ]




}
