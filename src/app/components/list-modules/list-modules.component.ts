import { Component, OnInit } from '@angular/core';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';
import { DatosApps } from 'src/app/models/DatosApps';
import { element } from '@angular/core/src/render3/instructions';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.css']
})

export class ListModulesComponent implements OnInit {
  listaModulos:DatosApps;
  listaCaracteristicas:any[] = [];

  constructor(private _configuracionApps:ConfigurarAppsService) {
    this.listaModulos = new DatosApps();
  }

  ngOnInit() {
    this._configuracionApps.change.subscribe(data => {
      this.listaModulos = this._configuracionApps.listaDatos;
      console.log( this.listaModulos);
      this.joinData(this.listaModulos);
    });
  }

  joinData(lista){
    let array_extract = [];
    this.listaCaracteristicas = [];
    
    array_extract.push(lista.contactoUsuario);
    array_extract.push(lista.listaFacebook);
    array_extract.push(lista.listaGoogle);
    array_extract.push(lista.listaHtml);
    array_extract.push(lista.listaPdf);
    array_extract.push(lista.listaRadio);
    array_extract.push(lista.listaTwitter);
    array_extract.push(lista.listaWordPress);
    array_extract.push(lista.listaYoutube);

    array_extract.forEach(modulos => {
      modulos.forEach(atributos => {
          this.listaCaracteristicas.push(atributos);
      });
    });
  }

  EliminarModulos(item){
    this._configuracionApps.EliminarDatos(item);
  }


}
