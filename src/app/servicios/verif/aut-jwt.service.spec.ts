import { TestBed, inject } from '@angular/core/testing';

import { AutJwtService } from './aut-jwt.service';

describe('AutJwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutJwtService]
    });
  });

  it('should be created', inject([AutJwtService], (service: AutJwtService) => {
    expect(service).toBeTruthy();
  }));
});
