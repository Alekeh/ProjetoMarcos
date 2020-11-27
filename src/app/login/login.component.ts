import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public usuario: any = 'bruno';
  public senha: any = '1';

  constructor(private route: Router) {
  }

  login(): void {
    if (this.usuario === 'bruno' && this.senha === '1') {
      console.log(this.usuario + '-' + this.senha);
      this.route.navigate(['/cliente']);
    }
  }
}
