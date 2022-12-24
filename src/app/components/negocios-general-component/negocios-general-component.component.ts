import { Component } from '@angular/core';
import JSON_DNegocio from '../../../assets/vendor/negocios_info.json'


interface Negocio {
  negocioID: number;
  nombre: string;
  direccion: string;
  imagenes: Imgenes;
  urlWebApp: string;
  horariosLocal: HorariosLocal;
  tipoNegocioID: number;
  tipoNegocio: string;
  NDescripcion: string;
  notas: string;
}

interface HorariosLocal {
  Lunes: string,
  Martes: string,
  Miercoles: string,
  Jueves: string,
  Viernes: string,
  Sabado: string,
  Domingo: string,
}

interface Imgenes {
  i1: any,
  i2: any,
  i3: any,
  i4: any
}


@Component({
  selector: 'app-negocios-general-component',
  templateUrl: './negocios-general-component.component.html',
  styleUrls: ['./negocios-general-component.component.css']
})

export class NegociosGeneralComponentComponent {
  infoNegocios_json: any = JSON_DNegocio;

  item: Negocio = {
    negocioID: 0,
    nombre: '',
    direccion: '',
    imagenes: {
      i1: '',
      i2: '',
      i3: '',
      i4: ''
    },
    urlWebApp: '',
    horariosLocal: {
      Lunes: '',
      Martes: '',
      Miercoles: '',
      Jueves: '',
      Viernes: '',
      Sabado: '',
      Domingo: '',
    },
    tipoNegocioID: 0,
    tipoNegocio: '',
    NDescripcion: '',
    notas: '',
  }

  ed(d: Negocio) {
    this.item = d;
    // console.log(d.horariosLocal);
    // console.log(this.infoNegocios_json.imagenes)
  }
}
