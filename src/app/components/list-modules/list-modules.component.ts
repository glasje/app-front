import { Component, OnInit } from '@angular/core';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';
import { DatosApps } from 'src/app/models/DatosApps';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.css']
})

export class ListModulesComponent implements OnInit {
  listaCaract:DatosApps;

  constructor(private _configuracionApps:ConfigurarAppsService) {
    this.listaCaract = new DatosApps();
  }

  ngOnInit() {
    this._configuracionApps.change.subscribe(data => {
      this.listaCaract = this._configuracionApps.listaDatos;
      console.log( this.listaCaract);
    });
  }

}
