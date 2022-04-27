import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto.model";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    constructor(private http: HttpClient) { }

    private baseUrl = "http://localhost:3009" 
    // json server


    listar(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseUrl}/products`)
    }

    criar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(`${this.baseUrl}/products`, produto)
    }
}