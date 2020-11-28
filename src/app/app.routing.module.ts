import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoriaListComponent} from './categoria/list/categoria.list.component';
import {CategoriaEditComponent} from './categoria/edit/categoria.edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'categoriaEdit', component: CategoriaEditComponent},
  {path: 'categoriaList', component: CategoriaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
