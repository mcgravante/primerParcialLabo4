import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { AbmContainerComponent } from './componentes/abm-container/abm-container.component';
import { AltaContainerComponent } from './componentes/alta-container/alta-container.component';
import { ModificaContainerComponent } from './componentes/modifica-container/modifica-container.component';
import { BajaContainerComponent } from './componentes/baja-container/baja-container.component';
import { ListadoContainerComponent } from './componentes/listado-container/listado-container.component';
import { CargaContainerComponent } from './componentes/carga-container/carga-container.component';
import { CargarProductoEnContainerComponent } from './componentes/cargar-producto-en-container/cargar-producto-en-container.component';
import { KeysPipe } from './pipes/keys.pipe';    // For Storage    <<<<<<


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    LoginComponent,
    AltaRepartidorComponent,
    NavBarComponent,
    AltaProductoComponent,
    ProductoDetalleComponent,
    ListadoProductosComponent,
    AbmContainerComponent,
    AltaContainerComponent,
    ModificaContainerComponent,
    BajaContainerComponent,
    ListadoContainerComponent,
    CargaContainerComponent,
    CargarProductoEnContainerComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
