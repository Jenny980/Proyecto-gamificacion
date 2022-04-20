import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateHomeComponent } from './components/private-home/private-home.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'privateHome', component: PrivateHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registroUser', component: RegistroUserComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
