export interface Payment {
  id?: number;
  bookingId: number;
  amount: number;
  paymentDate: string;  // ISO string
  paymentMethod: 'card' | 'upi' | 'cash' | 'netbanking';
  status: 'pending' | 'completed' | 'failed';
}
