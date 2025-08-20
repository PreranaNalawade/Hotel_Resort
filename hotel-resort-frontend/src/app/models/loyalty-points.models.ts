export interface LoyaltyPoints {
  id?: number;
  userId: number;
  points: number;
  lastUpdated: string;  // ISO string
}
