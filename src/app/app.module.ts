import { routing } from './app.routing';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import {AppComponent} from './pages/app.page.init/app.component';
import {ClienteComponent} from './pages/cliente/cliente.component';
import {CategoriaComponent} from './pages/categoria/categoria.component';
import {LoginComponent} from './pages/login/login.component';
import {ProdutoComponent} from './pages/produto/produto.component';

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
    FormsModule,
    routing
    // HttpModule
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
