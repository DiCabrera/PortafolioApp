import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://127.0.0.1:8000';

  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/account/api/token/`, {
      username,
      password,
    });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/account/register/`, { user });
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    this.token = null;
    return this.http.post(`${this.baseUrl}/account/logout/`, {});
  }
  
}
