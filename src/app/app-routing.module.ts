import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContainerModule } from './modulos/container/container.module';
import { ProductoModule } from './modulos/producto/producto.module';
import { RepartidorModule } from './modulos/repartidor/repartidor.module';
import { AdminAuthGuard } from './servicios/admin-auth.guard';
import { AuthGuard } from './servicios/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => RepartidorModule), canActivate: [AuthGuard]

  },
  {
    path: 'producto', loadChildren: () => import('./modulos/producto/producto.module').then(m => ProductoModule), canActivate: [AuthGuard]

  },
  {
    path: 'container', loadChildren: () => import('./modulos/container/container.module').then(m => ContainerModule), canActivate: [AdminAuthGuard]

  },
  { path: 'bienvenido', component: HomeComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
