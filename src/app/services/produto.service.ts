import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3009';
  // json server

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/product`);
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseUrl}/product`, produto);
  }

  editar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/product/${id}`, produto);
  }

  ver(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/product/${id}`);
  }

  deletar(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.baseUrl}/product/${id}`);
  }
}
