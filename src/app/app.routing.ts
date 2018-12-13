
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ConfiguracionAppsComponent } from './components/configuracion-apps/configuracion-apps.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },

  { path: 'ConfiguracionApps', component: ConfiguracionAppsComponent },

  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting { }
