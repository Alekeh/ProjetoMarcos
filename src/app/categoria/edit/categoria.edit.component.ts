import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-categoria-component',
  templateUrl: './categoria.edit.component.html',
  styleUrls: ['./categoria.edit.component.scss']
})
export class CategoriaEditComponent {

  constructor(private route: Router) {
  }

  editarCategoria(): void {
  // Vai no banco edita e assim que finalizar volta para a tela de list
    this.route.navigate(['/categoriaList']);
  }
}
