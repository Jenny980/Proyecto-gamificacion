import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { PrivateHomeComponent } from './components/private-home/private-home.component';

import { LoginComponent } from './components/login/login.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { UnidadAmarillaComponent } from './components/unidad-amarilla/unidad-amarilla.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';
import { PrincipalComponent } from './components/principal/principal.component';
import { PrefinalComponent } from './components/prefinal/prefinal.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateHomeComponent,
    LoginComponent,
    RegistroUserComponent,
    UnidadAmarillaComponent,
    TiendaComponent,
    CuestionarioComponent,
    PrincipalComponent,
    PrefinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
