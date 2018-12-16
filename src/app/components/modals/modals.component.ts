import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';
import { ConfigurarApps } from 'src/app/models/ConfiguararApps';

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
  formAgregarHtml: FormGroup;
  formAgregarPdf: FormGroup;
  formAgregarImagenes: FormGroup;
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
        validators: [Validators.required]
      })
    });

    // Form agregar red social
    this.formAgregarYoutube = new FormGroup({
      urlYoutube: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreYoutube: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.formAgregarGoogle = new FormGroup({
      urlGoogle: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreGoogle: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.formAgregarWordpress = new FormGroup({
      urlWordpress: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(reg)]
      }),
      nombreWordpress: new FormControl(null, {
        validators: [Validators.required]
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
        validators: [Validators.required]
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
    // Form agregar usuario
    this.formAgregarHtml = new FormGroup({
      nombreHtml: new FormControl(null, {
        validators: [Validators.required]
      }),
       docHtml: new FormControl(null, {
        validators: [Validators.required]
      }),
      /*letra: new FormControl(null, {
        validators: [Validators.required]
      }),
      tamano: new FormControl(null, {
        validators: [Validators.required]
      }),
      color: new FormControl(null, {
        validators: [Validators.required]
      }),
      colorFondo: new FormControl(null, {
        validators: [Validators.required]
      }), */
    });

    // Form agregar usuario
    this.formAgregarPdf = new FormGroup({
      nombrePdf: new FormControl(null, {
        validators: [Validators.required]
      }),
      docPdf: new FormControl(null, {
        validators: [Validators.required]
      }),
      nombreDoc: new FormControl(null, {
        validators: [Validators.required]
      }),
    });

    this.formAgregarImagenes = new FormGroup({
      logo: new FormControl(null, {
        validators: [Validators.required]
      }),
      splash: new FormControl(null, {
        validators: [Validators.required]
      }),
      icono: new FormControl(null, {
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
      let id = url.substring(posicion + 2, url.length);
      console.log('id', id);

      let facebook = {
        "id": "4",
        "nombre": this.formAgregarFacebook.get('nombreFacebook').value,
        "descripcion": "",
        "configuracion": {
          "id": id,
          'url': url
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

      let google = {
        "id": "7",
        "nombre": this.formAgregarGoogle.get('nombreGoogle').value,
        "descripcion": "",
        "configuracion": {
          "url": url
        }
      }
      this._configurarApps.AgregarDatos(google, 'google');
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
      let posicion = url.indexOf('m/', 0);
      let id = url.substring(posicion + 2, url.length);
      let twitter = {
        "id": "5",
        "nombre": this.formAgregarTwitter.get('nombreTwitter').value,
        "descripcion": "",
        "configuracion": {
          "id": id,
          'url': url
        }
        
      }
      this._configurarApps.AgregarDatos(twitter, 'twitter');
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

      let radio = {
        "id": "3",
        "nombre": this.formAgregarRadio.get('nombreRadio').value,
        "descripcion": "",
        "configuracion": {
          "url": this.formAgregarRadio.get('urlRadio').value,
          "titulo": this.formAgregarRadio.get('titulo').value,
          "descripcion": this.formAgregarRadio.get('descripcion').value
        }
      };

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
      let posicion = url.indexOf('m/', 0);
      let id = url.substring(posicion + 2, url.length);
      let youtube = {
        "id": "9",
        "nombre": this.formAgregarYoutube.get('nombreYoutube').value,
        "descripcion": "",
        "configuracion": {
          "id": id,
          'url': url
        }
      }

      this._configurarApps.AgregarDatos(youtube, 'youtube');
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

      let web = {
        "id": "8",
        "nombre": this.formAgregarWordpress.get('nombreWordpress').value,
        "descripcion": "",
        "configuracion": {
          "url": this.formAgregarWordpress.get('urlWordpress').value
        }
      }
      this._configurarApps.AgregarDatos(web, 'wordpress');
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
        "id": "6",
        "nombre": "Contacto",
        "descripcion": "",
        "configuracion": {
          "nombre": this.formAgregarUsuario.get('nombre').value,
          "telefono": this.formAgregarUsuario.get('contacto').value,
          "direccion": this.formAgregarUsuario.get('direccion').value,
          "email": this.formAgregarUsuario.get('email').value
        }
      };

      this._configurarApps.AgregarDatos(usuario, 'contacto');
      document.getElementById('btnAgregarUsuario').click();
      this.formAgregarUsuario.reset();
    } else {
      Object.keys(this.formAgregarUsuario.controls).forEach(key => {
        this.formAgregarUsuario.get(key).markAsTouched();
      });
    }
  }

  AgregarHtml() {
    if (this.formAgregarHtml.valid) {

      let html = {
        "id" : "1",
        "nombre" : this.formAgregarHtml.get('nombreHtml').value,
        "descripcion" : "",
        "configuracion" : {
          "html" : this.formAgregarHtml.get('docHtml').value
        },
        "estilo": {
          "letra" : "",
          "tamano_letra" : "",
          "color" : "",
          "color_fondo" : "",
  
        }
      };

      this._configurarApps.AgregarDatos(html, 'html');
      document.getElementById('btnAgregarHtml').click();
      this.formAgregarHtml.reset();
    } else {
      Object.keys(this.formAgregarHtml.controls).forEach(key => {
        this.formAgregarHtml.get(key).markAsTouched();
      });
    }
  }
  onFileChange(event,controlForm){
    
      let file:File = event.target.files[0];
      let myReader:FileReader = new FileReader();
      let valor
      myReader.onloadend = (e) => {
        let archivo =myReader.result
        console.log('file',myReader.result)
        controlForm.setValue(archivo);
        console.log('control',controlForm);
      }
      myReader.readAsDataURL(file);
    }
  
  AgregarPdf() {
    if (this.formAgregarPdf.valid) {

      let pdf = {
        "id" : "2",
        "nombre" : this.formAgregarPdf.get('nombrePdf').value,
        "descripcion" : "",
        "configuracion" : {
          "archivo" : this.formAgregarPdf.get('docPdf').value,
          "nombre_archivo" : this.formAgregarPdf.get('nombreDoc').value
        }
      };

      this._configurarApps.AgregarDatos(pdf, 'pdf');
      document.getElementById('btnAgregarPdf').click();
      this.formAgregarPdf.reset();
    } else {
      Object.keys(this.formAgregarPdf.controls).forEach(key => {
        this.formAgregarPdf.get(key).markAsTouched();
      });
    }
    
  }

  AgregarImagenes(){
    if (this.formAgregarImagenes.valid) {
      ConfigurarApps.config.icono= this.formAgregarImagenes.get('icono').value;
      ConfigurarApps.config.logo= this.formAgregarImagenes.get('logo').value;
      ConfigurarApps.config.splash= this.formAgregarImagenes.get('splash').value;
      
      document.getElementById('btnAgregarImagenes').click();
      this.formAgregarImagenes.reset();
    } else {
      Object.keys(this.formAgregarImagenes.controls).forEach(key => {
        this.formAgregarImagenes.get(key).markAsTouched();
      });
    }
  }
}
