import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-ver-produtos',
  templateUrl: './ver-produtos.component.html',
  styleUrls: ['./ver-produtos.component.css']
})
export class VerProdutosComponent implements OnInit {

  produto!: Produto;
  produto_id!: number

  constructor(
    private router: Router,
    private service: ProdutoService,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => this.produto_id = params['id']);
  }

  ngOnInit(): void {
    this.service.ver(this.produto_id).subscribe((produto) => {
      this.produto = produto;
      console.log(this.produto)
    })
  }

  deletar(): void {
    this.service.deletar(this.produto_id).subscribe(() => {
      this.router.navigate(["/produtos"]);
    })
  }

}
