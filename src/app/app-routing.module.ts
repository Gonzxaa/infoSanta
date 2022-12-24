import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NegocioEspecificoComponentComponent } from './components/negocio-especifico-component/negocio-especifico-component.component';
import { NegociosGeneralComponentComponent } from './components/negocios-general-component/negocios-general-component.component';
import { WebInConstruComponentComponent } from './components/web-in-constru-component/web-in-constru-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'Negocios', component: NegociosGeneralComponentComponent },
  { path: 'Negocios/NegocioSeleccionado', component: NegocioEspecificoComponentComponent },
  { path: 'Omnibus', component: WebInConstruComponentComponent },
  { path: 'Imagenes', component: WebInConstruComponentComponent },
  { path: 'CSC', component: WebInConstruComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
