import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {   
  username: string = '';          //declare username, birthdate and age
  birthdate: string = '';
  age: number = 0;

  constructor(private router: Router) {   //constructor for navigation
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}'); //get current user from session storage
    if (!currentUser || !currentUser.valid) {           //if no user or user is not valid
      this.router.navigate(['/login']);                 //navigate to login page
    } else {                                //if user is valid
      this.username = currentUser.username;   //set username, birthdate and age with current user values
      this.birthdate = currentUser.birthdate;   
      this.age = currentUser.age;
    }
  }
}
