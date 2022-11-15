import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent{
    title:string= 'Contador';
    contador:number=10;
    base:number=-2;
    incrementar(){
        this.contador += this.base;
    }
    decrementar(){
        this.contador-=this.base;
    }
    aggregate(value:number){
        this.contador += this.base;
    }
}