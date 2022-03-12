import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno.detalles',
  templateUrl: './alumno.detalles.component.html',
  styleUrls: ['./alumno.detalles.component.scss'],
})
export class AlumnoDetallesComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerdetallealumno(this.matricula);
  }

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

  alumnoDetalle: any = {};
   matricula: string =this.ruta.snapshot.params.matricula;
   obtenerdetallealumno(matricula: string):any{
      console.log(matricula);

      for(let i =0; i<this.alumnos.length;i++){
        if(matricula== this.alumnos[i].matricula){
          this.alumnoDetalle=matricula;
        }
      }
      return this.alumnoDetalle;
   }
}
