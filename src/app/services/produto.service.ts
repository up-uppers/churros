import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto.model";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    private baseUrl = "http://localhost:3009" 
    // json server

    constructor(private http: HttpClient) { }

    listar(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseUrl}/products`)
    }
}