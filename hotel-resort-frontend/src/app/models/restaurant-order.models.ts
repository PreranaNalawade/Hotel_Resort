export interface RestaurantOrder {
  id?: number;
  userId: number;
  items: { name: string; quantity: number; price: number }[];
  totalAmount: number;
  orderStatus: 'pending' | 'preparing' | 'delivered' | 'cancelled';
  orderDate: string;  // ISO string
}
