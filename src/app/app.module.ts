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
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';    // For Storage    <<<<<<


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    DetallePaisComponent,
    DetalleActorComponent,
    LoginComponent,
    AltaRepartidorComponent,
    NavBarComponent,
    TablaActoresComponent,
    AltaProductoComponent,
    ProductoDetalleComponent,
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
