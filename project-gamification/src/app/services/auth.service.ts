import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth1: AngularFireAuth, private db: AngularFirestore) {}

  // tslint:disable-next-line:typedef
  async register(infoUser) {
    try {
      return await this.auth1.createUserWithEmailAndPassword(
        infoUser.email,
        infoUser.password
      );
    } catch (err) {
      console.log('Error en registro: ', err);
      return null;
    }
  }

  // tslint:disable-next-line:typedef
  async login(email, password) {
    try {
      return await this.auth1.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('Error en login: ', err);
      return null;
    }
  }

  // tslint:disable-next-line:typedef
  getUser() {
    return this.auth1.authState;
  }

  // tslint:disable-next-line:typedef
  salir() {
    this.auth1.signOut();
  }
}
