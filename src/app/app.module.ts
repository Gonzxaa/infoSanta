import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { NegocioEspecificoComponentComponent } from './components/negocio-especifico-component/negocio-especifico-component.component';
import { NegociosGeneralComponentComponent } from './components/negocios-general-component/negocios-general-component.component';
import { WebInConstruComponentComponent } from './components/web-in-constru-component/web-in-constru-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HomeComponentComponent,
    NegocioEspecificoComponentComponent,
    NegociosGeneralComponentComponent,
    WebInConstruComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
