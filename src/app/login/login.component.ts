import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const BACKEND_URL = 'http://localhost:3000/api/auth';

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

  constructor(private router: Router, private httpClient: HttpClient) {}

  login() {
    const user = { email: this.email, password: this.password };          //chnage email to username for username login
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.httpClient.post(BACKEND_URL, user, httpOptions)
      .subscribe(
        (data: any) => {
          if (data.valid) {
            sessionStorage.setItem('currentUser', JSON.stringify({
              username: data.username,
              birthdate: data.birthdate,
              age: data.age,
              email: data.email,
              valid: data.valid
            }));
            this.router.navigate(['/account']);
          } else {
            this.errorMessage = 'Invalid credentials, please try again.';
          }
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      );
  }
}
