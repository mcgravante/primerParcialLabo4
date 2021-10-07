import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { ActorAltaComponent } from '../../componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from '../../componentes/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from '../../componentes/actor-pelicula/actor-pelicula.component';

const routes: Routes =
  [{ path: '', redirectTo: 'alta', pathMatch: 'full' },
  { path: 'alta', component: ActorAltaComponent },
  { path: 'listado', component: ActorListadoComponent },
  { path: 'actorpelicula', component: ActorPeliculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
