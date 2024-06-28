import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from "../../services/contacto/contactos.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {DetalleModalComponent} from "./detalle-modal/detalle-modal.component";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource: MatTableDataSource<any>;
  allContacts: any[];
  filtro:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private contactosService: ContactosService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog

  ) {
    this.dataSource = new MatTableDataSource<any>();
    this.allContacts = [];
  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactosService.allContactos()
      .subscribe(response => {
        this.allContacts = response;
        this.dataSource = new MatTableDataSource<any>(this.allContacts);
        this.dataSource.paginator = this.paginator;
        this._snackBar.open("Lista de Contactos obtenida", 'Cerrar', {
          duration: 1000
        });
      }, error => {
        this._snackBar.open("Error al obtener los Contactos", 'Cerrar', {
          duration: 3000
        });
      });
  }

  deleteContacto(id:any) {
    this.contactosService.delete(id)
      .subscribe(response => {
        this._snackBar.open("Contacto Actualizado", 'Cerrar', {
          duration: 3000
        });
        this.getAllContacts();
      }, error => {
        this._snackBar.open("Error al Actualizar Contacto", 'Cerrar', {
          duration: 3000
        });
      });
  }

  verDetalle(contactId: any) {
    this.dialog.open(DetalleModalComponent, {
      width: '50vw',
      data: { contactId }
    });
  }

  filterContactos() {
    this.contactosService.filtro(this.filtro)
      .subscribe(response => {
        this.allContacts = response;
        this.dataSource = new MatTableDataSource<any>(this.allContacts);
        this.dataSource.paginator = this.paginator;

        this._snackBar.open("Resultado Búsqueda", 'Cerrar', {
          duration: 3000
        });

      }, error => {
        this._snackBar.open("No se encontraron Contactos", 'Cerrar', {
          duration: 3000
        });
      });
  }


  onPageChange(event: PageEvent) {
    console.log(event);
  }
}
