import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefinal',
  templateUrl: './prefinal.component.html',
  styleUrls: ['./prefinal.component.css']
})
export class PrefinalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irCuestionario = () => {
    this.router.navigate(['/cuestionario']);
  }
}
