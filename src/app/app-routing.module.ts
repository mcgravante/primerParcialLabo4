import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActorModule } from './modulos/actor/actor.module';
import { PeliculasModule } from './modulos/peliculas/peliculas.module';
import { ProductoModule } from './modulos/producto/producto.module';
import { RepartidorModule } from './modulos/repartidor/repartidor.module';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => RepartidorModule)

  },
  {
    path: 'producto', loadChildren: () => import('./modulos/producto/producto.module').then(m => ProductoModule)

  },
  { path: 'bienvenido', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
