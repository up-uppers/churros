import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';
  // json server

  registrar(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }
}
