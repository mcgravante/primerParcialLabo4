import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from 'src/app/componentes/alta-producto/alta-producto.component';
import { ProductoDetalleComponent } from 'src/app/componentes/producto-detalle/producto-detalle.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'alta', pathMatch: 'full'
  },
  {
    path: 'alta', component: AltaProductoComponent
  },
  {
    path: 'detalle', component: ProductoDetalleComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
