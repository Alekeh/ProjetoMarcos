import {AppComponent} from './app.page.init/app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClienteComponent} from './cliente/cliente.component';
import {CategoriaComponent} from './categoria/categoria.component';
import {LoginComponent} from './login/login.component';
import {ProdutoComponent} from './produto/produto.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    CategoriaComponent,
    LoginComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ClienteComponent,
    CategoriaComponent,
    LoginComponent,
    ProdutoComponent
  ]
})
export class AppModule {
}