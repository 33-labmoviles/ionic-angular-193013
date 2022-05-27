import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  alumnoslista: any = [];

  getAlumnos(){
    return this.http.get('https://laboratiorioapps-default-rtdb.firebaseio.com/alumnos.json').subscribe(res=>{
      const alumnoRes: any=res;
      const alumnosArray=Object.keys(res).forEach((key:any)=>{
      (this.alumnoslista).push(alumnoRes[key]);
     });
   });
  }
}
