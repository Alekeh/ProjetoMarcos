import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Categoria} from '../../classes/categoria';

@Component({
  selector: 'app-list-categoria-component',
  templateUrl: './categoria.list.component.html',
  styleUrls: ['./categoria.list.component.scss']
})
export class CategoriaListComponent implements OnInit {
  listaCategoria: Categoria[] = [];

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.adicionaCategorias();

    // Faz um service que vai bater no backend /categorias que o retorno vai atribuir ao data listaCategoria
  }

  adicionaCategorias(): void {
    const categoria1: Categoria = new Categoria();
    categoria1.id = 1;
    categoria1.nome = 'categoria1';
    const categoria2: Categoria = new Categoria();
    categoria2.id = 2;
    categoria2.nome = 'categoria2';
    const categoria3: Categoria = new Categoria();
    categoria3.id = 3;
    categoria3.nome = 'categoria3';
    this.listaCategoria.push(categoria1, categoria2, categoria3);
  }

}
