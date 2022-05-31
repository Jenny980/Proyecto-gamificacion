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
    uid: '',
    nombre: '',
    edad: '',
    puntos: 0,
    esmeraldas: 0,
    medalla: 'ninguna'
  };
  public identificacion: string;
  estado = false;
  constructor(
    private router: Router,
    private db: AngularFirestore,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login = () => {
    this.router.navigate(['/login']);
  }

  // tslint:disable-next-line:typedef
  registrar() {
    this.authService.register(this.usuario).then((res) => {
      this.estado = true;
      console.log(this.estado);
      this.identificacion = res.user.uid;
      this.usuario.uid = this.identificacion;
      this.db.collection('Users').add(this.usuario);
      console.log(this.usuario);
      alert('Registro exitoso');
      this.reset();
      })
      .catch((error) => {
        alert(error);
      });
  }

  // tslint:disable-next-line:typedef
  reset(){
    const ele = document.getElementById('nombre') as HTMLInputElement;
    ele.value = '';
    const ele1 = document.getElementById('edad') as HTMLInputElement;
    ele1.value = '';
    const ele2 = document.getElementById('email') as HTMLInputElement;
    ele2.value = '';
    const ele3 = document.getElementById('pass') as HTMLInputElement;
    ele3.value = '';
  }
}
