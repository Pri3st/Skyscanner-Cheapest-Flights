import { TestBed } from '@angular/core/testing';

import { FlightsComponent } from './searchflights.service';

describe('SearchService', () => {
  let service: FlightsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
