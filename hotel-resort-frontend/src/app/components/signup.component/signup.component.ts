import { Component } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: User = {
    name: '',
    email: '',
    password: '',
    role: 'customer'  // ✅ Add default role
  };
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.signupForm).subscribe({
      next: (res) => {
        alert('Signup successful!');
        this.signupForm = { name: '', email: '', password: '', role: 'customer' };
      },
      error: () => this.errorMessage = 'Signup failed. Please try again.'
    });
  }
}
