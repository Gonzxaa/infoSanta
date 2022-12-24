import { Component, Input } from '@angular/core';

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
  selector: 'app-negocio-especifico-component',
  templateUrl: './negocio-especifico-component.component.html',
  styleUrls: ['./negocio-especifico-component.component.css']
})
export class NegocioEspecificoComponentComponent {
  @Input() dataEnviada: Negocio;
}
