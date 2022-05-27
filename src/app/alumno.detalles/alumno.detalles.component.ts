import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumno.detalles',
  templateUrl: './alumno.detalles.component.html',
  styleUrls: ['./alumno.detalles.component.scss'],
})
export class AlumnoDetallesComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionSheetC: ActionSheetController, private http: HttpClient) { }

  alumnoslista: any =[];
  indice: string = "";
  alumnoDetalle: any = {};
  matricula: any = this.ruta.snapshot.params.id;

  ngOnInit() {
    this.getAlumnos().subscribe(res => {
      const alumnoRes: any=res;
      const alumnosArray=Object.keys(res).forEach((key:any)=>{
      (this.alumnoslista).push(alumnoRes[key]);
     });
      console.log(this.alumnoslista);
      this.indice = this.alumnoslista.findIndex(x => x.matricula == this.matricula);
      console.log(this.matricula);
      console.log(this.indice);
      //this.alumnoDetalle = this.alumnoslista[this.indice];
      this.getpersonadetalle(this.indice).subscribe(det => {this.alumnoDetalle=det;})
      console.log(this.alumnoDetalle);
    });
  }
   getAlumnos(){
    return this.http.get('https://laboratiorioapps-default-rtdb.firebaseio.com/alumnos.json');
 }

 getpersonadetalle(num: string): any {
  return this.http.get('https://laboratiorioapps-default-rtdb.firebaseio.com/alumnos/'+ num +'.json');
  
}

   async mostrarActionSheet(){
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'mi-primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
