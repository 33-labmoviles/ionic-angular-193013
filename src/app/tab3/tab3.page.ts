import { NgForm } from '@angular/forms';
import { Component, Input , Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  onSubmit(agregarAlumno: NgForm){
    var nuevoAlumno = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    };
    this.postpersona(nuevoAlumno).subscribe();
    this.clear();
  }
  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";

    postpersona(nuevo: any) {
      return this.http.post('https://laboratiorioapps-default-rtdb.firebaseio.com/alumnos.json', nuevo);
    }

    nuevoAlumno: any = {};

    clear(){
      this.nombre = "";
      this.apellido = "";
      this.matricula = "";
    }
}
