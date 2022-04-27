import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ListarProdutosComponent
  },
  {
    path: "teste",
    component: ListarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
