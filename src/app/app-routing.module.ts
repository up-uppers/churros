import { EditarProdutoComponent } from './components/produtos/editar-produto/editar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CriarProdutosComponent } from './components/produtos/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { VerProdutosComponent } from './components/produtos/ver-produtos/ver-produtos.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produto/:id', component: VerProdutosComponent },
  {
    path: '', component: CadastrosComponent,
    canActivate: [AuthService],
    children: [
      { path: 'produto-create', component: CriarProdutosComponent },
      { path: 'produto-editar/:id', component: EditarProdutoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
