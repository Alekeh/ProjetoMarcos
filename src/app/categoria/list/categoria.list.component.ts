import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-categoria-component',
  templateUrl: './categoria.list.component.html',
  styleUrls: ['./categoria.list.component.scss']
})
export class CategoriaListComponent {

  constructor(private route: Router) {
  }

}
