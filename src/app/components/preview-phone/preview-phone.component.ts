import { Component, OnInit } from '@angular/core';
import { DatosApps } from 'src/app/models/DatosApps';
import { ConfigurarAppsService } from 'src/app/services/configurar-apps.service';

@Component({
  selector: 'app-preview-phone',
  templateUrl: './preview-phone.component.html',
  styleUrls: ['./preview-phone.component.css']
})
export class PreviewPhoneComponent implements OnInit {
  listaModulos:DatosApps;

  constructor(private _configuracionApps:ConfigurarAppsService)   {
    this.listaModulos = new DatosApps();
  }

  ngOnInit() {
    this._configuracionApps.change.subscribe(data => {
      this.listaModulos = this._configuracionApps.listaDatos;
      this.agregarModulo(this.listaModulos);
    });
  }
  openSideBar() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeSideBar(){
    document.getElementById("mySidenav").style.width = "0";
  }
  agregarModulo(lista){
    let elements = document.getElementsByClassName('a-modulo');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    let array_mods = []
    if(lista.contactoUsuario.length > 0){
      array_mods.push(lista.contactoUsuario);
    }
    if(lista.listaFacebook.length > 0){
      array_mods.push(lista.listaFacebook);
    }
    if(lista.listaGoogle.length > 0){
      array_mods.push(lista.listaGoogle);
    }
    if(lista.listaHtml.length > 0){
      array_mods.push(lista.listaHtml);
    }
    if(lista.listaPdf.length > 0){
      array_mods.push(lista.listaPdf);
    }
    if(lista.listaTwitter.length > 0){
      array_mods.push(lista.listaTwitter);
    }
    if(lista.listaWordPress.length > 0){
      array_mods.push(lista.listaWordPress);
    }
    if(lista.listaYoutube.length > 0){
      array_mods.push(lista.listaYoutube);
    }
    if(lista.listaRadio.length > 0){
      array_mods.push(lista.listaRadio);
    }
    this.AgregarEnlaceMod(array_mods);
  }

  AgregarEnlaceMod(mod){
    let sidenav = document.getElementById("mySidenav");
    mod.forEach(element => {
      element.forEach(atributos =>{
        var enlace = document.createElement("a");
        //enlace.setAttribute('href', '');
        enlace.classList.add('a-modulo');
        enlace.style.padding = '8px 8px 8px 32px';
        enlace.style.textDecoration = 'none';
        enlace.style.fontSize = '25px';
        enlace.style.color = '#818181';
        enlace.style.display = 'block';
        enlace.style.transition = '0.3s'; 
        enlace.innerHTML = atributos.nombre;
        sidenav.appendChild(enlace);
      })      
    });
  }
}
