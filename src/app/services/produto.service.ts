import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient, public authService: AuthService) {}

  private baseUrl = 'http://localhost:3009';
  // json server

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/product`);
  }

  criar(produto: Produto): Observable<Produto> {
    let headers = new HttpHeaders();

    if (this.authService.isAuthenticated() && this.authService.isAdmin()){
      headers = headers.set('Authorization', `Bearer ${this.authService.logedUser.token}`);
    }

    return this.http.post<Produto>(`${this.baseUrl}/product`, produto, { headers: headers });
  }

  editar(id: string, produto: Produto): Observable<Produto> {
    let headers = new HttpHeaders();

    if (this.authService.isAuthenticated() && this.authService.isAdmin()){
      headers = headers.set('Authorization', `Bearer ${this.authService.logedUser.token}`);
    }

    return this.http.put<Produto>(`${this.baseUrl}/product/${id}`, produto, { headers: headers });
  }

  ver(id: string): Observable<Produto> {
    let headers = new HttpHeaders();

    if (this.authService.isAuthenticated() && this.authService.isAdmin()){
      headers = headers.set('Authorization', `Bearer ${this.authService.logedUser.token}`);
    }

    return this.http.get<Produto>(`${this.baseUrl}/product/${id}`, { headers: headers });
  }

  deletar(id: string): Observable<Produto> {
    let headers = new HttpHeaders();

    if (this.authService.isAuthenticated() && this.authService.isAdmin()){
      headers = headers.set('Authorization', `Bearer ${this.authService.logedUser.token}`);
    }

    return this.http.delete<Produto>(`${this.baseUrl}/product/${id}`, { headers: headers });
  }
}
