import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';
  // json server

  listar(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user`);
  }

  editar(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/user/${id}`, user);
  }

  ver(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${id}`);
  }

  deletar(id: string): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/user/${id}`);
  }
}
