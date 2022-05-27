import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
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
