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

  alumnoslista= [
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

  alumnoDetalle: any = {};
   matricula: string =this.ruta.snapshot.params.id;
   obtenerdetallealumno(matricula: string):any{
      console.log(matricula);

      for(let i =0; i<this.alumnoslista.length;i++){
        if(matricula== this.alumnoslista[i].matricula){
          this.alumnoDetalle=this.alumnoslista[i];
        }
      }
      return this.alumnoDetalle;
   }
}
