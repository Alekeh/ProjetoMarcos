import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categoria-component',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {

  constructor(private route: Router) {
  }

}
