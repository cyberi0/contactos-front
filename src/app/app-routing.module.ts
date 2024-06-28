import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import {RegistroComponent} from "./components/contactos/registro/registro.component";

const routes: Routes = [
  { path: '', component: ContactosComponent },
  { path: 'contacto', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
