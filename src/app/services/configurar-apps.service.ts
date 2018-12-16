import { Injectable, EventEmitter, Output } from '@angular/core';
import { DatosApps } from '../models/DatosApps';

@Injectable({
  providedIn: 'root'
})
export class ConfigurarAppsService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() delete: EventEmitter<boolean> = new EventEmitter();
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
    this.listaDatos.listaHtml=[];
    this.listaDatos.listaPdf=[];
  }

  AgregarDatos(datos, tipoLista) {
    switch (tipoLista) {
      
      case ('html'): {
        this.listaDatos.listaHtml.push(datos);
        break;
      }
      case ('pdf'): {
        this.listaDatos.listaPdf.push(datos);
        break;
      }
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

  EliminarDatos(item){
    switch (item.id) {
      
      case ('1'): {
        this.listaDatos.listaHtml = [];
        break;
      }
      case ('2'): {
        this.listaDatos.listaPdf = [];
        break;
      }
      case ('4'): {
        this.listaDatos.listaFacebook = [];
        break;
      }
      case ('5'): {
        this.listaDatos.listaTwitter = [];
        break;
      }
      case ('9'): {
        this.listaDatos.listaYoutube = [];
        break;
      }
      case ('6'): {
        this.listaDatos.contactoUsuario = [];
        break;
      }
      case ('3'): {
        this.listaDatos.listaRadio = [];
        break;
      }
      case ('7'): {
        this.listaDatos.listaGoogle = [];
        break;
      }
      case ('8'): {
        this.listaDatos.listaWordPress = [];
        break;
      }
    }
    this.change.emit(true);
  }

}
