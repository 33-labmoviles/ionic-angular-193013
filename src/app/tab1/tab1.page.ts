import { Component, Input , OnChanges} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
    alumnos= [
     {
       "nombre": "Diego",
       "apellido": "Jasso",
       "matricula" : "123ABC"
     },
     {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Luis",
      "apellido": "Tamez",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Abraham",
      "apellido": "Moreno",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demetci",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Luis",
      "apellido": "Martinez",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Manuel",
      "apellido": "Juarez",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Roguel",
      "apellido": "Guel",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Luis",
      "apellido": "Villareal",
      "matricula" : "123ABC"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula" : "123ABC"
    },
    ];
  

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";

  agregar_alumno(): void{
    var nuevoAlumno : any = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    }
    this.alumnos.push(nuevoAlumno);
    this.alumnos.sort();
    console.log(this.alumnos);
    
  }
}  