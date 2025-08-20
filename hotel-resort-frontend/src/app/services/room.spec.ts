import { TestBed } from '@angular/core/testing';
import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomService); // inject the service class
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
