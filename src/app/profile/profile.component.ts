import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = '';
  birthdate: string = '';
  age: number = 0;

  constructor(private router: Router) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');  //get current user from session storage
    if (!currentUser || !currentUser.valid) {                                       //if no user or user is not valid
      this.router.navigate(['/login']);                                             //navigate to login page
    } else {                                                                     //if user is valid                   
      this.username = currentUser.username;                                       //set username, birthdate and age with current user values
      this.birthdate = currentUser.birthdate;
      this.age = currentUser.age;
    }
  }

  saveProfile() {                                                               //save profile function
    const updatedUser = {                                                       //update user with new values
      username: this.username,                                                  //set username, birthdate, age and email with the new values
      birthdate: this.birthdate,
      age: this.age,
      email: JSON.parse(sessionStorage.getItem('currentUser') || '{}').email,   //get email from session storage and keep it the same  
      valid: true                                                               //set valid to true
    };
    sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));       //store current user in session storage
    alert('Profile updated successfully!');                                   //alert user that profile was updated
  }
}
