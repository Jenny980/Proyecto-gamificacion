import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
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
  async login(infoUser) {
    try {
      return await this.auth1.signInWithEmailAndPassword(
        infoUser.email,
        infoUser.password
      );
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

  // tslint:disable-next-line:typedef
  getDatos(idu) {
    const lectura = this.db.collection('Users').get().toPromise();
    return lectura
      .then((resp) => {
        const document = resp.docs;
        // tslint:disable-next-line:prefer-const
        for (let objeto of document) {
          const dts: any = objeto.data();
          if (idu === dts.uid) {
            return dts;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
