import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking';
import { Booking } from 'src/app/models/booking.models';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];
  errorMessage: string = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data: Booking[]) => this.bookings = data,
      error: () => this.errorMessage = 'Failed to load bookings.'
    });
  }

  cancelBooking(id: number): void {
    if (confirm('Are you sure you want to cancel this booking?')) {
      this.bookingService.deleteBooking(id).subscribe({
        next: () => this.bookings = this.bookings.filter(b => b.id !== id),
        error: () => this.errorMessage = 'Failed to cancel booking.'
      });
    }
  }
}
