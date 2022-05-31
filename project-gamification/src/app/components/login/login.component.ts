import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  uid;
  datos;
  usuario = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.salir();
  }
  // tslint:disable-next-line:typedef

  miHome = () => {
    this.router.navigate(['/privateHome']);
  }

  // tslint:disable-next-line:typedef
  login() {
    this.authService.login(this.usuario).then((res) => {
      if (res === null) {
        alert('Error');
      } else {
        this.getUser();
        this.miHome();
      }
    });
  }

  // tslint:disable-next-line:typedef
  getUser() {
    this.authService.getUser().subscribe((res) => {
      this.uid = res?.uid;
      this.getDatos();
    });
  }

  // tslint:disable-next-line:typedef
  getDatos() {
    this.authService
      .getDatos(this.uid)
      .then((res) => {
        this.datos = res;
        console.log(this.datos);
      })
      .catch((error) => {
        alert(error);
      });
  }

  // tslint:disable-next-line:typedef
  salir() {
    this.authService.salir();
  }
  registro = () => {
    this.router.navigate(['/registroUser']);
  }
}
