import { Injectable, EventEmitter, Output } from '@angular/core';
import { DatosApps } from '../models/DatosApps';

@Injectable({
  providedIn: 'root'
})
export class ConfigurarAppsService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  listaDatos: DatosApps;
  constructor() {
    this.listaDatos = new DatosApps();
    this.listaDatos.contactoUsuario = [];
    this.listaDatos.listaFacebook = [];
    this.listaDatos.listaRadio = [];
    this.listaDatos.listaTwitter = [];
    this.listaDatos.listaYoutube = [];
    this.listaDatos.listaGoogle = [];
    this.listaDatos.listaWordPress = [];
  }

  AgregarDatos(datos, tipoLista) {
    switch (tipoLista) {
      case ('facebook'): {
        this.listaDatos.listaFacebook.push(datos);
        break;
      }
      case ('twitter'): {
        this.listaDatos.listaTwitter.push(datos);
        break;
      }
      case ('youtube'): {
        this.listaDatos.listaYoutube.push(datos);
        break;
      }
      case ('contacto'): {
        this.listaDatos.contactoUsuario.push(datos);
        break;
      }
      case ('radio'): {
        this.listaDatos.listaRadio.push(datos);
        break;
      }
      case ('google'): {
        this.listaDatos.listaGoogle.push(datos);
        break;
      }
      case ('wordpress'): {
        this.listaDatos.listaWordPress.push(datos);
        break;
      }

    }
    this.change.emit(true);
  }

}
