import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from 'src/app/componentes/alta-producto/alta-producto.component';

const routes: Routes = [{ path: '', redirectTo: 'alta', pathMatch: 'full' },
{ path: 'alta', component: AltaProductoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
