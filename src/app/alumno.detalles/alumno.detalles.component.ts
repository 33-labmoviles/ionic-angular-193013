import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno.detalles',
  templateUrl: './alumno.detalles.component.html',
  styleUrls: ['./alumno.detalles.component.scss'],
})
export class AlumnoDetallesComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionSheetC: ActionSheetController) { }

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
