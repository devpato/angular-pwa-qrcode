import { TestBed } from '@angular/core/testing';

import { GuestService } from './guest.service';

describe('GuestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestService = TestBed.get(GuestService);
    expect(service).toBeTruthy();
  });
});
