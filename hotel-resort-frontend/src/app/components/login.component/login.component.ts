import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login() {
  this.userService.getAllUsers().subscribe({
    next: (users) => {
      const user = users.find(u => u.email === this.email && u.password === this.password);
      if (user) {
        console.log('Login successful', user);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    },
    error: (err) => {
      this.errorMessage = 'Server error. Try again.';
    }
  });
}
}
