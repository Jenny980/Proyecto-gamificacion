import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css'],
})
export class RegistroUserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login = () => {
    this.router.navigate(['/login']);
  };
}
