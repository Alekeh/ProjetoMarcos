import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  constructor(private route: Router) {
  }

}
