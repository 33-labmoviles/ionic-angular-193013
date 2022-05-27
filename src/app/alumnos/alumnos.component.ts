import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  
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

}
