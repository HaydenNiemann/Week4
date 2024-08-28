import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, AccountComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router: Router) {}

  logout() {                      //logout function to clear session storage and navigate to login page
    // Clear session storage    
    sessionStorage.clear();       //clear session storage

  
    this.router.navigate(['/login']);     //redirect to login page after session storage is cleared
  }
}

