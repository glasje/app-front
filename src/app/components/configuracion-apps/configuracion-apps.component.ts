import { Component, OnInit } from '@angular/core';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';
import { DatosApps } from 'src/app/models/DatosApps';

@Component({
  selector: 'app-configuracion-apps',
  templateUrl: './configuracion-apps.component.html',
  styleUrls: ['./configuracion-apps.component.css']
})
export class ConfiguracionAppsComponent implements OnInit {

  listaDatos: DatosApps;

  constructor(
    private _configurarApps: ConfigurarAppsService
  ) {
    this.listaDatos =new DatosApps();
  }

  ngOnInit() {
    this.ObtenerLista();
  }

  ObtenerLista() {
    this._configurarApps.change.subscribe(
      data => {
        this.listaDatos = this._configurarApps.listaDatos;
        console.log('lista', this.listaDatos);
      }
    );
  }

}
