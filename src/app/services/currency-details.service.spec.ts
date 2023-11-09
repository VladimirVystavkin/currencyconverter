import { TestBed } from '@angular/core/testing';

import { CurrencyDetailsService } from './currency-details.service';

describe('CurrencyDetailsService', () => {
  let service: CurrencyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
