import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/clientes']);
      },
      error: err => {
        console.error('Login failed', err);
        alert('Login incorrecto');
      }
    });
  }
}
