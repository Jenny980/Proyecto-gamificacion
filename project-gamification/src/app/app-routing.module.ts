import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateHomeComponent } from './components/private-home/private-home.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { UnidadAmarillaComponent } from './components/unidad-amarilla/unidad-amarilla.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'privateHome', component: PrivateHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registroUser', component: RegistroUserComponent },
  { path: 'UnidadAmarilla', component: UnidadAmarillaComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
