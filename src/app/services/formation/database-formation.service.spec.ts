import { TestBed } from '@angular/core/testing';

import { DatabaseFormationService } from './database-formation.service';

describe('DatabaseFormationService', () => {
  let service: DatabaseFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
