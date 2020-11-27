import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produto-component',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  preco: any;
  nome: any;

  constructor(private route: Router) {
  }

  CadastrarProduto(): void {

  }
}
