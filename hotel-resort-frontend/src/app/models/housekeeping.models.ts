export interface Housekeeping {
  id?: number;
  roomId: number;
  staffId: number;
  task: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;  // ISO string
}
