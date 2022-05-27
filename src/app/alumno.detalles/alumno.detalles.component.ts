import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Location, registerLocaleData } from '@angular/common';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { Database } from '@angular/fire/database';

@Component({
  selector: 'app-alumno.detalles',
  templateUrl: './alumno.detalles.component.html',
  styleUrls: ['./alumno.detalles.component.scss'],
})
export class AlumnoDetallesComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionSheetC: ActionSheetController) { }

  alumnoslista: any =[];
  alumnoDetalle: any = {};
  matricula: string = this.ruta.snapshot.params.id;

  ngOnInit() {
    const db = getDatabase();
    const auxdetalle = ref(db ,'alumnos/' + this.matricula);
    onValue(auxdetalle, (aux)=>{
      this.alumnoDetalle = aux.val();
    });
  }

  deleteAlum(): any{
    const db = getDatabase();
    remove(ref(db, 'alumnos/' + this.matricula))
    window.history.back();window.location.reload();
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
          this.deleteAlum();
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
