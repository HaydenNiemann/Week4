import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const BACKEND_URL = 'http://localhost:3000/api/auth';  //url for backend api authentication

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';             //declare email, password and errorMessage
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private httpClient: HttpClient) {}  //constructor for navigation and http client

  login() {
    const user = { email: this.email, password: this.password };          //chnage email to username for username login
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })   //set http headers
    };

    this.httpClient.post(BACKEND_URL, user, httpOptions)                //post request to backend api
      .subscribe(                                                  //subscribe to response          
        (data: any) => {                                          //handle response        
          if (data.valid) {                                    //if user is valid     
            sessionStorage.setItem('currentUser', JSON.stringify({  //set current user in session storage without password
              username: data.username,
              birthdate: data.birthdate,
              age: data.age,
              email: data.email,
              valid: data.valid
            }));
            this.router.navigate(['/account']);         //navigate to account page
          } else {
            this.errorMessage = 'Invalid credentials, please try again.';   //set error message if login fails  
          }
        },
        (error) => {                                     //handle error from http request
          this.errorMessage = 'Invalid credentials, please try again.'; //set error message if login fails
        }
      );
  }
}
