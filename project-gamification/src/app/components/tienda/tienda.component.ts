import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  premio1(){
    alert('Tu compra de clase por 20 minutos está siendo procesada, en breve te enviaremos un correo de confirmación.');
  }

  // tslint:disable-next-line:typedef
  premio2(){
    alert('Tu compra de clase por 35 minutos está siendo procesada, en breve te enviaremos un correo de confirmación.');
  }

}
