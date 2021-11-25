import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from 'src/app/componentes/abm-container/abm-container.component';
import { CargaContainerComponent } from 'src/app/componentes/carga-container/carga-container.component';
import { AdminAuthGuard } from 'src/app/servicios/admin-auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'abm', pathMatch: 'full'
  },
  {
    path: 'abm', component: AbmContainerComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'carga', component: CargaContainerComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
