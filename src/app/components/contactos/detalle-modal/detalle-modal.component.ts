import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactosService } from "../../../services/contacto/contactos.service";
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-movie-modal',
  templateUrl: './detalle-modal.component.html',
  styleUrls: ['./detalle-modal.component.css']
})
export class DetalleModalComponent {
  details: any = {
    direcciones: [],
    telefonos: [],
    correos: []
  };

  showButton: boolean = false;
  direcciones: string[] = [''];
  telefonos: string[] = [''];
  correos: string[] = [''];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactosService: ContactosService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
) {
    this.getContactoDetalles(this.data.contactId);
    const token = localStorage.getItem('token');
    this.showButton = !!token;
  }

  getContactoDetalles(id:any) {
    this.contactosService.getContactoDetalles(id)
      .subscribe(
        (response) => {
          this.details = response;
          console.log(response);
        },
        (error) => {
          console.error('Error fetching comments:', error);
        }
      );
  }

  updateContacto() {
    console.log(this.details);
    this.contactosService.update(this.details)
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

  closeDialog() {
    this.dialog.closeAll();
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
