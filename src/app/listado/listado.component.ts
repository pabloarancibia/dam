import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  nombre: string = 'Desconocido';
  estado: boolean = true;

  miArray = [1, 2, 3, 4];
  listado;

  constructor(public listadoServ: ListadoService) {
    this.listado = this.listadoServ.getDispositivos();
  }

  ngOnInit(): void {
  }

  clickEnboton() {
    console.log(this.nombre);
  }

  cambiar() {
    this.estado = !this.estado;
  }







}
