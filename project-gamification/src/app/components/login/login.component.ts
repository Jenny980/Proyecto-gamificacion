import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef

  miHome = () => {
    this.router.navigate(['/privateHome']);
  };

  // tslint:disable-next-line:typedef
  login() {
    console.log(this.usuario);
    this.authService
      .login(this.usuario.email, this.usuario.password)
      .then((res) => {
        console.log('ingresó:', res);
        this.miHome();
      });
  }

  // tslint:disable-next-line:typedef
  getUser() {
    this.authService.getUser().subscribe((res) => {
      console.log(res?.email);
    });
  }

  // tslint:disable-next-line:typedef
  salir() {
    this.authService.salir();
  }
}
