import { Component, OnInit } from '@angular/core';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';
import { DatosApps } from 'src/app/models/DatosApps';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigurarApps } from 'src/app/models/ConfiguararApps';

@Component({
  selector: 'app-configuracion-apps',
  templateUrl: './configuracion-apps.component.html',
  styleUrls: ['./configuracion-apps.component.css']
})
export class ConfiguracionAppsComponent implements OnInit {

  listaDatos: DatosApps;
  telefono: boolean;
  tipoTelefono: any;
  formCrearApps: FormGroup;
  modulo: boolean;

  constructor(
    private _configurarApps: ConfigurarAppsService
  ) {
    this.listaDatos = new DatosApps();
    this.telefono = true;
    this.tipoTelefono = 'Android';
    this.modulo = false;
    this.formCrearApps = new FormGroup({
      nombreApps: new FormControl(null, {
        validators: [Validators.required]
      }),
      autor: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  ngOnInit() {
    this.ObtenerLista();
  }

  ObtenerLista() {
    this._configurarApps.change.subscribe(
      data => {
        this.listaDatos = this._configurarApps.listaDatos;
        console.log('lista', this.listaDatos.listaFacebook.length);
        this.modulo = this.listaDatos.listaFacebook.length > 0 ? false : true;
        this.modulo = this.listaDatos.contactoUsuario.length > 0 ? false : true;
        console.log('modulo',this.modulo)
      }
    );
  }

  CambiarTelefono(value) {
    this.tipoTelefono = value;
    this.telefono = value === 'Iphone' ? false : true;

  }
  CrearApps() {
    if (this.formCrearApps.valid) {
      ConfigurarApps.nombre = this.formCrearApps.get('nombreApps').value;
      ConfigurarApps.fecha_creacion = new Date().toISOString().substring(0, 10);
      ConfigurarApps.autor = '';
      ConfigurarApps.modulos.push(this.listaDatos.listaFacebook);
      ConfigurarApps.modulos.push(this.listaDatos.listaGoogle);
      ConfigurarApps.modulos.push(this.listaDatos.listaRadio);
      ConfigurarApps.modulos.push(this.listaDatos.listaTwitter);
      ConfigurarApps.modulos.push(this.listaDatos.listaWordPress);
      ConfigurarApps.modulos.push(this.listaDatos.listaYoutube);

      console.log('objeto', ConfigurarApps);
      this.formCrearApps.reset();
    } else {
      Object.keys(this.formCrearApps.controls).forEach(key => {
        this.formCrearApps.get(key).markAsTouched();
      });
    }
  }

}
