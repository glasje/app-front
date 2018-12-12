import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  crearApps: boolean;

  constructor(
    private _router: Router
  ) {
    this.crearApps = true;

  }

  ngOnInit() {
  }
  CrearApps() {
    this.crearApps = false;
    this._router.navigate(['/ConfiguracionApps']);
  }
}
