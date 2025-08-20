import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  newUser: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'customer'
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    if (!this.newUser.name || !this.newUser.email || !this.newUser.password) return;

    this.userService.createUser(this.newUser).subscribe((data) => {
      this.users.push(data);
      this.newUser = {
        id: 0,
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 'customer'
      };
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
    });
  }
}
