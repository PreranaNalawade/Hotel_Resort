import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantOrder } from '../models/restaurant-order.models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrderService {
  private apiUrl = 'http://localhost:8080/api/restaurant-orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<RestaurantOrder[]> {
    return this.http.get<RestaurantOrder[]>(this.apiUrl);
  }

  getOrderById(id: number): Observable<RestaurantOrder> {
    return this.http.get<RestaurantOrder>(`${this.apiUrl}/${id}`);
  }

  createOrder(order: RestaurantOrder): Observable<RestaurantOrder> {
    return this.http.post<RestaurantOrder>(this.apiUrl, order);
  }

  updateOrder(id: number, order: RestaurantOrder): Observable<RestaurantOrder> {
    return this.http.put<RestaurantOrder>(`${this.apiUrl}/${id}`, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
