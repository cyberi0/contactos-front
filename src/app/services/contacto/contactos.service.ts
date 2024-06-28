import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  registrarContacto(formData: {
    correos: any[];
    direcciones: any[];
    telefonos: any[];
    nombre: string
  }): Observable<any> {
    return this.http.post<any>(`${apiUrl}/contactos/`, formData);
  }

  allContactos(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/contactos/`);
  }

  getContactoDetalles(id:any): Observable<any> {
    return this.http.get<any>(`${apiUrl}/contactos/${id}`);
  }

  update(details:any): Observable<any> {
    return this.http.put<any>(`${apiUrl}/contactos/${details.id}`, details);
  }

  delete(id:any): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/contactos/${id}`);
  }

  filtro(filtro:any): Observable<any> {
    return this.http.options<any>(`${apiUrl}/contactos/filter?filter=${filtro}`);
  }
}
