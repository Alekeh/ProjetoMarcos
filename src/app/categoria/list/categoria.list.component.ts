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
    // Faz um service que vai bater no backend /categorias que o retorno vai atribuir ao data listaCategoria
  }

}
