import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';

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
  listaDatos = [];
  formAgregarGoogle: FormGroup;
  formAgregarWordpress: FormGroup;
  constructor(
    private _configurarApps: ConfigurarAppsService
  ) {
    const reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    // Form agregar red social
    this.formAgregarFacebook = new FormGroup({
      urlFacebook: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreFacebook: new FormControl(null, {
        validators: [Validators.required]
      })
    });
    // Form agregar red social
    this.formAgregarTwitter = new FormGroup({
      urlTwitter: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreTwitter: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });

    // Form agregar red social
    this.formAgregarYoutube = new FormGroup({
      urlYoutube: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreYoutube: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });

    this.formAgregarGoogle = new FormGroup({
      urlGoogle: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreGoogle: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      })
    });

    this.formAgregarWordpress = new FormGroup({
      urlWordpress: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreWordpress: new FormControl(null, {
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
      }),
      nombreRadio: new FormControl(null, {
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
        validators: [Validators.required, Validators.email]
      }),
      direccion: new FormControl(null, {
        validators: [Validators.required]
      })
    });
    this.listaDatos = [];
  }


  ngOnInit() {
  }

  AgregarFacebook() {
    if (this.formAgregarFacebook.valid) {

      let url = this.formAgregarFacebook.get('urlFacebook').value;
      let posicion = url.indexOf('m/', 0);
      let id = url.substring(posicion+2, url.length);
      console.log('id', id);

      let facebook = {
        "id": "4",
        "nombre": this.formAgregarFacebook.get('nombreFacebook').value,
        "descripcion": "",
        "configuracion": {
          "id": id
        }
      };

      this._configurarApps.AgregarDatos(facebook, 'facebook');
      document.getElementById('btnAgregarFacebook').click();
      this.formAgregarFacebook.reset();
    } else {
      Object.keys(this.formAgregarFacebook.controls).forEach(key => {
        this.formAgregarFacebook.get(key).markAsTouched();
      });
    }
  }

  AgregarForm() {
    if (this.formAgregarGoogle.valid) {
      let url = this.formAgregarGoogle.get('urlGoogle').value;
      this._configurarApps.AgregarDatos(url, 'google');
      document.getElementById('btnAgregarGoogle').click();
      this.formAgregarGoogle.reset();
    } else {
      Object.keys(this.formAgregarGoogle.controls).forEach(key => {
        this.formAgregarGoogle.get(key).markAsTouched();
      });
    }
  }

  AgregarTwitter() {
    if (this.formAgregarTwitter.valid) {
      let url = this.formAgregarTwitter.get('urlTwitter').value;
      this._configurarApps.AgregarDatos(url, 'twitter');
      document.getElementById('btnAgregarTwitter').click();
      this.formAgregarTwitter.reset();
    } else {
      Object.keys(this.formAgregarTwitter.controls).forEach(key => {
        this.formAgregarTwitter.get(key).markAsTouched();
      });
    }
  }

  AgregarRadioLinea() {
    if (this.formAgregarRadio.valid) {
      let titulo = this.formAgregarRadio.get('titulo').value;
      let descripcion = this.formAgregarRadio.get('descripcion').value;
      let url = this.formAgregarRadio.get('urlRadio').value;
      let radio = {
        titulo: '',
        descripcion: '',
        url: ''
      };
      radio.titulo = titulo;
      radio.descripcion = descripcion;
      radio.url = url;
      this._configurarApps.AgregarDatos(radio, 'radio');
      document.getElementById('btnAgregarRadio').click();
      this.formAgregarRadio.reset();
    } else {
      Object.keys(this.formAgregarRadio.controls).forEach(key => {
        this.formAgregarRadio.get(key).markAsTouched();
      });
    }
  }

  AgregarYoutube() {
    if (this.formAgregarYoutube.valid) {
      let url = this.formAgregarYoutube.get('urlYoutube').value;
      this._configurarApps.AgregarDatos(url, 'youtube');
      document.getElementById('btnAgregarYoutube').click();
      this.formAgregarYoutube.reset();
    } else {
      Object.keys(this.formAgregarYoutube.controls).forEach(key => {
        this.formAgregarYoutube.get(key).markAsTouched();
      });
    }
  }

  AgregarWordpress() {
    if (this.formAgregarWordpress.valid) {
      let url = this.formAgregarWordpress.get('urlWordpress').value;
      this._configurarApps.AgregarDatos(url, 'wordpress');
      document.getElementById('btnAgregarWorpress').click();
      this.formAgregarWordpress.reset();
    } else {
      Object.keys(this.formAgregarWordpress.controls).forEach(key => {
        this.formAgregarWordpress.get(key).markAsTouched();
      });
    }
  }


  AgregarUsuario() {
    if (this.formAgregarUsuario.valid) {
      let usuario = {
        nombre: this.formAgregarUsuario.get('nombre').value,
        contacto: this.formAgregarUsuario.get('contacto').value,
        email: this.formAgregarUsuario.get('email').value,
        direccion: this.formAgregarUsuario.get('direccion').value
      }
      this._configurarApps.AgregarDatos(usuario, 'contacto');
      document.getElementById('btnAgregarUsuario').click();
      this.formAgregarUsuario.reset();
    } else {
      Object.keys(this.formAgregarUsuario.controls).forEach(key => {
        this.formAgregarUsuario.get(key).markAsTouched();
      });
    }
  }
}
