import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent implements OnInit {
  // FormGroup objeto es para crear grupo de controles
  public formDispositivo: FormGroup;

  // form builder va ser el encargado de crear los controles
  constructor(private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    // llamamos al método que crea los controles.
    this.crearForm();

  }

  // creamos los grupos de controles a travez de un metodo
  private crearForm() {
    this.formDispositivo = this.fBuilder.group(
      {
        nombre: ['', Validators.required],
        ubicacion: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }


  guardarDispositivo() {
    console.log("voy a guardar");
    console.log(this.formDispositivo.get("nombre").value);
    console.log(this.formDispositivo.get("ubicacion").value);
    console.log(this.formDispositivo.get("email").value);
  }

}
