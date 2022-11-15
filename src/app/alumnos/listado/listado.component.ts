import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  constructor() {
    
    
  }
  students: string[] =['Javier', 'Sergio', 'Pilar', 'Vicente'];
  approved: string[] = [];



  pass():void{
    this.approved.push(this.students[this.students.length-1])
    this.students.pop();
  }

}
