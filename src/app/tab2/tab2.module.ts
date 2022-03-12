import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { AlumnosComponentModule } from '../alumnos/alumnos.component.module';
import { AlumnoDetallesComponentModule } from '../alumno.detalles/alumno.detalles.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AlumnosComponentModule,
    AlumnoDetallesComponentModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
