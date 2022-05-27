import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoDetallesComponent } from './alumno.detalles/alumno.detalles.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
  path: 'alumno.detalles',
  component: AlumnoDetallesComponent
  },
  {
    path: 'alumno.detalles/:id',
    component: AlumnoDetallesComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
