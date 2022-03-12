import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {AlumnoDetallesComponent} from './alumno.detalles.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AlumnoDetallesComponent],
  exports: [AlumnoDetallesComponent]
})
export class AlumnoDetallesComponentModule {}