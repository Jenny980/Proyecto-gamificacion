import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  NgbModule,
  NgbModalOptions,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
})
export class CuestionarioComponent implements OnInit {
  private ngModalService: NgbModal;
  form: FormGroup;
  contador = 0;
  displayStyle = 'none';
  private modalRef;
  @ViewChild('myModal') myModal: ElementRef;
  private respuestasCorrectas = {
    respuesta1: 'opcion1',
    respuesta2: 'opcion2',
    respuesta3: 'opcion2',
    respuesta4: 'opcion2',
    respuesta5: 'opcion2',
    respuesta6: 'opcion2',
    respuesta7: 'opcion2',
    respuesta8: 'opcion2',
    respuesta9: 'opcion2',
    respuesta10: 'opcion2',
  };

  constructor() {
    this.form = this.createInitialForm();
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onSubmitForm() {
    if (this.form.value.respuesta1 === this.respuestasCorrectas.respuesta1) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta2 === this.respuestasCorrectas.respuesta2) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta3 === this.respuestasCorrectas.respuesta3) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta4 === this.respuestasCorrectas.respuesta4) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta5 === this.respuestasCorrectas.respuesta5) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta6 === this.respuestasCorrectas.respuesta6) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta7 === this.respuestasCorrectas.respuesta7) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta8 === this.respuestasCorrectas.respuesta8) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta9 === this.respuestasCorrectas.respuesta9) {
      this.contador = this.contador + 10;
    }
    if (this.form.value.respuesta10 === this.respuestasCorrectas.respuesta10) {
      this.contador = this.contador + 10;
    }
    console.log(this.contador);
  }

  // tslint:disable-next-line:typedef
  createInitialForm() {
    return new FormGroup({
      respuesta1: new FormControl(null, [Validators.required]),
      respuesta2: new FormControl(null, [Validators.required]),
      respuesta3: new FormControl(null, [Validators.required]),
      respuesta4: new FormControl(null, [Validators.required]),
      respuesta5: new FormControl(null, [Validators.required]),
      respuesta6: new FormControl(null, [Validators.required]),
      respuesta7: new FormControl(null, [Validators.required]),
      respuesta8: new FormControl(null, [Validators.required]),
      respuesta9: new FormControl(null, [Validators.required]),
      respuesta10: new FormControl(null, [Validators.required]),
    });
  }

  // tslint:disable-next-line:typedef
  public openModal() {
    console.log('fsfs');
    const ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
    };
    this.ngModalService.open(this.myModal, ngbModalOptions);
  }
  // tslint:disable-next-line:typedef
  closeModal() {}

  // tslint:disable-next-line:typedef
  openPopup() {
    this.displayStyle = 'block';
  }
  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }
}
