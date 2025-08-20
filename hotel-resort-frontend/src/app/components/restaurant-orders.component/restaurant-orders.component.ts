import { Component, OnInit } from '@angular/core';
import { RestaurantOrderService } from 'src/app/services/restaurant-order.service';
import { RestaurantOrder } from 'src/app/models/restaurant-order.models';

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.css']
})
export class RestaurantOrdersComponent implements OnInit {
  orders: RestaurantOrder[] = [];
  errorMessage: string = '';

  constructor(private restaurantService: RestaurantOrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.restaurantService.getAllOrders().subscribe({
      next: (data: RestaurantOrder[]) => this.orders = data,
      error: () => this.errorMessage = 'Failed to load orders.'
    });
  }

  cancelOrder(id: number): void {
    if (confirm('Are you sure you want to cancel this order?')) {
      this.restaurantService.deleteOrder(id).subscribe({
        next: () => this.orders = this.orders.filter(o => o.id !== id),
        error: () => this.errorMessage = 'Failed to cancel order.'
      });
    }
  }
}
