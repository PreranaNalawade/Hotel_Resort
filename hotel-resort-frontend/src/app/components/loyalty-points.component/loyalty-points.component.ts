import { Component, OnInit } from '@angular/core';
import { LoyaltyPointsService } from 'src/app/services/loyalty-points.service';

@Component({
  selector: 'app-loyalty-points',
  templateUrl: './loyalty-points.component.html',
  styleUrls: ['./loyalty-points.component.css']
})
export class LoyaltyPointsComponent implements OnInit {
  points: number = 0;
  history: any[] = [];
  errorMessage: string = '';

  constructor(private loyaltyService: LoyaltyPointsService) {}

  ngOnInit(): void {
    this.loadPoints();
  }

  loadPoints(): void {
    this.loyaltyService.getPoints().subscribe({
      next: (data: any) => {
        this.points = data.totalPoints;
        this.history = data.history;
      },
      error: () => this.errorMessage = 'Failed to load loyalty points.'
    });
  }
}
