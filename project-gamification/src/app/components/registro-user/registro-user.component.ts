import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css'],
})
export class RegistroUserComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
    nombre: '',
    edad: '',
    puntos: 0,
    esmeraldas: 0,
    medalla: 'ninguna',
    uid: '',
  };
  constructor(
    private router: Router,
    private authService: AuthService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {}

  login = () => {
    this.router.navigate(['/login']);
  };

  // tslint:disable-next-line:typedef
  registrar() {
    this.authService
      .register(this.usuario)
      .then((res) => {
        const uid = res.user.uid;
        this.usuario.uid = uid;
        this.db.collection('Users').add(this.usuario);
        console.log('Se registró a:', res);
        this.login();
      })
      .catch((error) => {
        alert(error);
      });
  }
}
