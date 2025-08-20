import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackList: any[] = [];
  newFeedback: string = '';
  errorMessage: string = '';

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedback();
  }

  loadFeedback(): void {
    this.feedbackService.getFeedback().subscribe({
      next: (data: any) => this.feedbackList = data,
      error: () => this.errorMessage = 'Failed to load feedback.'
    });
  }
submitFeedback(): void {
  if (!this.newFeedback) return;

  // ✅ Create a complete Feedback object
  const newFb: Feedback = {
    message: this.newFeedback,
    userId: 1,                       // example user ID
    rating: 5,                        // default rating
    date: new Date().toISOString()   // current date
  };

  // Send it to the service
  this.feedbackService.addFeedback(newFb).subscribe({
    next: (fb: Feedback) => {
      this.feedbackList.push(fb);
      this.newFeedback = '';
    },
    error: () => this.errorMessage = 'Failed to submit feedback.'
  });
}

  
}
