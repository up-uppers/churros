import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css'],
})
export class EditarProdutoComponent implements OnInit {
  name!: string;
  type!: string;
  description!: string;
  price!: number;

  produtoId!: string;

  constructor(
    private router: Router,
    private service: ProdutoService,
    private rota: ActivatedRoute
  ) {
    this.rota.params.subscribe((params) => (this.produtoId = params['id']));
  }

  ngOnInit(): void {
    console.log(this.produtoId)
    this.service.ver(this.produtoId).subscribe((produto) => {
      this.name = produto.name;
      this.description = produto.description;
      this.price = produto.price;
    });
  }

  editarProduto(): void {
    let produto: Produto = {
      name: this.name,
      description: this.description,
      price: this.price,
    };

    this.service.editar(this.produtoId, produto).subscribe((produto) => {
      console.log(produto);
      this.router.navigate(['/produtos']);
    });
  }
}
