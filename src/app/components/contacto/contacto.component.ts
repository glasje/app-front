import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formAgregarRadio: FormGroup;

  constructor() {
    const reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
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
      })
    });
  }

  ngOnInit() {
  }

}
