import { Component, OnInit } from '@angular/core';
import { ContactosService } from "../../../services/contacto/contactos.service";
import { MatSnackBar } from "@angular/material/snack-bar";

interface Direccion {
  calle: string;
  numero: string;
  codigo_postal: string;
}

interface Telefono {
  numero: string;
}

interface Correo {
  correo: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  details = {
    nombre: '',
    direcciones: [] as Direccion[],
    telefonos: [] as Telefono[],
    correos: [] as Correo[]
  };

  constructor(
    private contactosService: ContactosService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

  }

  registrarContacto() {
    this.contactosService.registrarContacto(this.details)
      .subscribe(response => {
        this._snackBar.open("Contacto Actualizado", 'Cerrar', {
          duration: 3000
        });
      }, error => {
        this._snackBar.open("Error al Actualizar Contacto", 'Cerrar', {
          duration: 3000
        });
      });
  }

  agregarDireccion() {
    this.details.direcciones.push({ calle: '', numero: '', codigo_postal: '' });
  }

  eliminarDireccion(index: number) {
    this.details.direcciones.splice(index, 1);
  }

  agregarTelefono() {
    this.details.telefonos.push({ numero: '' });
  }

  eliminarTelefono(index: number) {
    this.details.telefonos.splice(index, 1);
  }

  agregarCorreo() {
    this.details.correos.push({ correo: '' });
  }

  eliminarCorreo(index: number) {
    this.details.correos.splice(index, 1);
  }



}
