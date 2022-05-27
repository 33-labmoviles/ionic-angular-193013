import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  constructor(private http: HttpClient) {}

    ngOnInit(): void {
     this.getAlumnos();
    }
  
    alumnoslista: any =[];
  
    getAlumnos(){
    return this.http.get('https://laboratiorioapps-default-rtdb.firebaseio.com/alumnos.json').subscribe(res=>{
      const alumnoRes: any=res;
      const alumnosArray=Object.keys(res).forEach((key:any)=>{
      (this.alumnoslista).push(alumnoRes[key]);
     });
   });
  }
}  