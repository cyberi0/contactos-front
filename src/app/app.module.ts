import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {ContactosService} from "./services/contacto/contactos.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from "@angular/material/dialog";
import { DetalleModalComponent } from './components/contactos/detalle-modal/detalle-modal.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import { RegistroComponent } from './components/contactos/registro/registro.component';
import {MatCardModule} from "@angular/material/card";
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ContactosComponent,
    DetalleModalComponent,
    RegistroComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [ContactosService]
})
export class AppModule { }
