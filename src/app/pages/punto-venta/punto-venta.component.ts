import { Component } from '@angular/core';
import {CompraProductComponent} from '../../components/compra-product/compra-product.component';

import {DatosValeComponent} from '../../components/vales/datos-vale/datos-vale.component';
import {CapturaClienteComponent} from '../../components/vales/captura-cliente/captura-cliente.component';
import {SubirArchivosComponent} from '../../components/vales/subir-archivos/subir-archivos.component';
import {CanjeComponent} from '../../components/vales/canje/canje.component';

@Component({
  selector: 'app-punto-venta',
  standalone: true,
  imports: [CompraProductComponent,DatosValeComponent,CapturaClienteComponent,SubirArchivosComponent,CanjeComponent],
  templateUrl: './punto-venta.component.html',
  styleUrl: './punto-venta.component.css'
})
export class PuntoVentaComponent {

  datosVale = 1;
  capturaCli = 0;
  subirDoc = 0;
  canjeVal = 0;

}
