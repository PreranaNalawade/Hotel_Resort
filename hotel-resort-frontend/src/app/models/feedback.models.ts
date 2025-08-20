export interface Feedback {
  id?: number;
  message: string;
  userId: number;   // required
  rating: number;   // required
  date: string;     // required
}
