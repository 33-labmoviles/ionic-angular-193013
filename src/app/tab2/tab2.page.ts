import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
  
}
