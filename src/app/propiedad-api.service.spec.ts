import { TestBed } from '@angular/core/testing';

import { PropiedadApiService } from './propiedad-api.service';

describe('PropiedadApiService', () => {
  let service: PropiedadApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropiedadApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
