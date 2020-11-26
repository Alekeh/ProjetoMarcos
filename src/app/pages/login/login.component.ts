import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  logar(event): void {
    this.route.navigate(['/cliente']);
  }
}
