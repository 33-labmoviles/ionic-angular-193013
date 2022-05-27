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
     "matricula" : "asdadas"
   },
   {
     "nombre": "Luis",
     "apellido": "Tamez",
     "matricula" : "fgddsfafd"
   },
   {
     "nombre": "Abraham",
     "apellido": "Moreno",
     "matricula" : "45fdfsfd"
   },
   {
     "nombre": "Aylin",
     "apellido": "Demetci",
     "matricula" : "asfdsdf2"
   },
   {
     "nombre": "Luis",
     "apellido": "Martinez",
     "matricula" : "1sdfsff"
   },
   {
     "nombre": "Manuel",
     "apellido": "Juarez",
     "matricula" : "123456"
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