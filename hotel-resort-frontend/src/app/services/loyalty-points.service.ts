import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoyaltyPoints } from '../models/loyalty-points.models';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyPointsService {
  private apiUrl = 'http://localhost:8080/api/loyalty-points';

  constructor(private http: HttpClient) {}

  getPointsByUser(userId: number): Observable<LoyaltyPoints> {
    return this.http.get<LoyaltyPoints>(`${this.apiUrl}/user/${userId}`);
  }

  updatePoints(id: number, points: LoyaltyPoints): Observable<LoyaltyPoints> {
    return this.http.put<LoyaltyPoints>(`${this.apiUrl}/${id}`, points);
  }
   // Get total points and history
  getPoints(): Observable<LoyaltyPoints> {
    return this.http.get<LoyaltyPoints>(this.apiUrl);
  }

  // Optional: Add points for a user
  addPoints(points: number, description: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { points, description });
  }
}

export { LoyaltyPoints };
