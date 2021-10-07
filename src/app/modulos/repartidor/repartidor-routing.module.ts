import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from 'src/app/componentes/alta-repartidor/alta-repartidor.component';

const routes: Routes = [{ path: '', redirectTo: 'alta', pathMatch: 'full' },
{ path: 'alta', component: AltaRepartidorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
