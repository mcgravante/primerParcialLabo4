import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from 'src/app/componentes/abm-container/abm-container.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'abm', pathMatch: 'full'
  },
  {
    path: 'abm', component: AbmContainerComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
