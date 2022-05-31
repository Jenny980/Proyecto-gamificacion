import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as events from 'events';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.css'],
})
export class PrivateHomeComponent implements OnInit {

  datos;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
   this.authService.recibirr$.subscribe(data => {
    this.datos = data;
    console.log('juju', this.datos);
    this.cambioNombre();
  });
  }

  // tslint:disable-next-line:typedef
  cambioNombre(){
    const ele = document.getElementById('nombre') as HTMLInputElement;
    ele.innerHTML = this.datos.nombre;
  }

  navegar = () => {
    this.router.navigate(['/UnidadAmarilla']);
  }

  irTienda = () => {
    this.router.navigate(['/tienda']);
  }
}

