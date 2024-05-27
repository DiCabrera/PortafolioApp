import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://127.0.0.1:8000';

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  constructor(
    private http: HttpClient
  ) { }


  registrarPropiedad(data: any): Observable<any> {
   
    const token = this.getToken();

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http  .post(`${this.baseUrl}/main/registrar-propiedad/`, data, {headers})

  }



}