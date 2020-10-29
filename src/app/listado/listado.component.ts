import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  nombre: string = 'Desconocido';
  estado: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickEnboton() {
    console.log(this.nombre);
  }

  cambiar() {
    this.estado = !this.estado;
  }







}
