import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.css']
})
export class PrivateHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    navegar = () => {
    this.router.navigate(['/UnidadAmarilla']);
  }

}
