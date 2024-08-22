import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private validAccounts = [
    { email: 'test1@email.com', password: 'test123' },
    { email: 'test2@email.com', password: 'test123' },
    { email: 'test3@email.com', password: 'test123' }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.validAccounts.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid credentials, please try again.';
    }
  }
}
