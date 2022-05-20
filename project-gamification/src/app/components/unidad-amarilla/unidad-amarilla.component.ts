import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-amarilla',
  templateUrl: './unidad-amarilla.component.html',
  styleUrls: ['./unidad-amarilla.component.css'],
})
export class UnidadAmarillaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  atras = () => {
    this.router.navigate(['/privateHome']);
  };
  irCuestionario = () => {
    this.router.navigate(['/cuestionario']);
  };
}
