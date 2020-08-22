import { TestBed } from '@angular/core/testing';

import { FlightsresultsService } from './flightsresults.service';

describe('FlightsresultsService', () => {
  let service: FlightsresultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsresultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
