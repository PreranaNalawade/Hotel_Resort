import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService); // inject the actual service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
