import { Component } from "@angular/core";

@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html',
    styleUrls: ['lista.component.css']
})

export class ListaComponent{
    lista = [
        {element : "Naranja", quantity: 5},
    {element: "Leche", quantity: 2},
    {element: "Chocolate", quantity: 10},
    {element: "Zumo", quantity: 50}
    
    ]
}