import { TestBed } from '@angular/core/testing';
import { LoyaltyPointsService } from './loyalty-points.service';

describe('LoyaltyPointsService', () => {
  let service: LoyaltyPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoyaltyPointsService); // inject the correct service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
