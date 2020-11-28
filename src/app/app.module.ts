import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import {CategoriaListComponent} from './categoria/list/categoria.list.component';
import {CategoriaEditComponent} from './categoria/edit/categoria.edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriaListComponent,
    CategoriaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
