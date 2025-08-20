import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { name: 'Guest', role: 'Visitor' };

  rooms = [
    { id: 1, type: 'Deluxe Room', price: 120, status: 'Available', image: '/assets/room1.jpg' },
    { id: 2, type: 'Suite', price: 200, status: 'Available', image: '/assets/room2.jpg' },
    { id: 3, type: 'Standard Room', price: 80, status: 'Booked', image: '/assets/room3.jpg' },
  ];
}
