import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking';  // import your service

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Booking', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService); // inject the service, not the type
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
