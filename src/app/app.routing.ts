import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {CategoriaComponent} from './pages/categoria/categoria.component';
import {ClienteComponent} from './pages/cliente/cliente.component';
import {ProdutoComponent} from './pages/produto/produto.component';

const APP_ROUTES: Routes = [
  {path: 'categoria', component: CategoriaComponent},
  {path: '', component: LoginComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'produto', component: ProdutoComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
