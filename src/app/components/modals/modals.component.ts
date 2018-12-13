import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  private formAgregarFacebook: FormGroup;
  private formAgregarTwitter: FormGroup;
  private formAgregarRadio: FormGroup;
  private formAgregarYoutube: FormGroup;
  private formAgregarUsuario: FormGroup;
  constructor() {
    const reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    // Form agregar red social
    this.formAgregarFacebook = new FormGroup({
      urlFacebook: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });
    // Form agregar red social
    this.formAgregarTwitter = new FormGroup({
      urlTwitter: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });

    // Form agregar red social
    this.formAgregarYoutube = new FormGroup({
      urlYoutube: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });

    // Form agregar radio
    this.formAgregarRadio = new FormGroup({
      titulo: new FormControl(null, {
        validators: [Validators.required]
      }),
      descripcion: new FormControl(null, {
        validators: [Validators.required]
      }),
      urlRadio: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });

    // Form agregar usuario
    this.formAgregarUsuario = new FormGroup({
      nombre: new FormControl(null, {
        validators: [Validators.required]
      }),
      contacto: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      direccion: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }


  ngOnInit() {
  }

  AgregarFacebook() {
    if (this.formAgregarFacebook.valid) {
      console.log('aquii');
    } else {
      Object.keys(this.formAgregarFacebook.controls).forEach(key => {
        this.formAgregarFacebook.get(key).markAsTouched();
      });
    }
  }

  AgregarTwitter() {
    if (this.formAgregarTwitter.valid) {
      console.log('aquii');
    } else {
      Object.keys(this.formAgregarTwitter.controls).forEach(key => {
        this.formAgregarTwitter.get(key).markAsTouched();
      });
    }
  }

  AgregarRadioLinea() {
    if (this.formAgregarRadio.valid) {
      console.log('aquii');
    } else {
      Object.keys(this.formAgregarRadio.controls).forEach(key => {
        this.formAgregarRadio.get(key).markAsTouched();
      });
    }
  }

  AgregarYoutube() {
    if (this.formAgregarYoutube.valid) {
      console.log('aquii');
    } else {
      Object.keys(this.formAgregarYoutube.controls).forEach(key => {
        this.formAgregarYoutube.get(key).markAsTouched();
      });
    }
  }

  AgregarUsuario() {
    if (this.formAgregarUsuario.valid) {
      console.log('aquii');
    } else {
      Object.keys(this.formAgregarUsuario.controls).forEach(key => {
        this.formAgregarUsuario.get(key).markAsTouched();
      });
    }
  }
}
