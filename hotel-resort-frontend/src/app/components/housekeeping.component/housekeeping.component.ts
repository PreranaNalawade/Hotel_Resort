import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from 'src/app/services/housekeeping.service';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css']
})
export class HousekeepingComponent implements OnInit {
  tasks: any[] = [];
  errorMessage: string = '';

  constructor(private housekeepingService: HousekeepingService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.housekeepingService.getTasks().subscribe({
      next: (data: any) => this.tasks = data,
      error: () => this.errorMessage = 'Failed to load tasks.'
    });
  }

  markDone(id: number): void {
    this.housekeepingService.completeTask(id).subscribe({
      next: () => this.tasks = this.tasks.filter(t => t.id !== id),
      error: () => this.errorMessage = 'Failed to mark task as done.'
    });
  }
}
