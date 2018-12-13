import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  private formAgregar: FormGroup;
  private formAgregarRadio: FormGroup;
  constructor() {
    // Form agregar red social
    this.formAgregar = new FormGroup({
      urlFacebook: new FormControl(null, {
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
        validators: [Validators.required]
      })
    });
  }


ngOnInit() {
}

}
