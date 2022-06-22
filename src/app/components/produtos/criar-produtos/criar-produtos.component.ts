import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent implements OnInit {

  name!: string;
  type!: string;
  description!: string;
  price!: number;

  constructor(private router: Router, private service : ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrarProduto(): void {
    let produto :  Produto = {
      name: this.name,
      description: this.description,
      type: this.type,
      price: this.price
    }

    this.service.criar(produto).subscribe((produto) => {
      this.router.navigate(["/produtos"]);
    })
  }

}
