import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor( private service: ProdutoService, public authService: AuthService ) { }

  ngOnInit(): void {

    this.service.listar().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(produtos)
    })

  }

}
