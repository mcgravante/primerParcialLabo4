import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from '../../componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from '../../componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
          { path: '', redirectTo: 'alta', pathMatch: 'full' },
        { path: 'alta', component: PeliculaAltaComponent },
        { path: 'listado', component: PeliculaListadoComponent }
      ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
