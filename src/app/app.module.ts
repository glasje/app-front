import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRouting } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfiguracionAppsComponent } from './components/configuracion-apps/configuracion-apps.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModulesComponent } from './components/select-modules/select-modules.component';
import { ListModulesComponent } from './components/list-modules/list-modules.component';
// DIRECTIVES
import {
  LettersCharDirective,
  PhoneCharDirective
} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactoComponent,
    FooterComponent,
    ConfiguracionAppsComponent,
    ModalsComponent,
    ConfiguracionAppsComponent,
    SelectModulesComponent,
    ListModulesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
