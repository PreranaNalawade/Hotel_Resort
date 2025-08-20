export interface Booking {
  id?: number;
  userId: number;
  roomId: number;
  checkInDate: string;   // ISO string
  checkOutDate: string;  // ISO string
  totalAmount: number;
  status: 'booked' | 'checked-in' | 'checked-out' | 'cancelled';
}
