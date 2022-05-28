import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.css'],
})
export class PrivateHomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  datos;
  ngOnInit(): void {}

  navegar = () => {
    this.router.navigate(['/UnidadAmarilla']);
  };

  irTienda = () => {
    this.router.navigate(['/tienda']);
  };
}
