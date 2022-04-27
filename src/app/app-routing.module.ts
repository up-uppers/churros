import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CriarProdutosComponent } from './components/produtos/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "produtos", component: ListarProdutosComponent },
  { path: "produto-create", component: CriarProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
