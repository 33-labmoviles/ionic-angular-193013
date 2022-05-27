import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoDetallesComponent } from '../alumno.detalles/alumno.detalles.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  },
  {
  path: 'alumno.detalles',
  component: AlumnoDetallesComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
