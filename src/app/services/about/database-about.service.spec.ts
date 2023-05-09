import { TestBed } from '@angular/core/testing';

import { DatabaseAboutService } from './database-about.service';

describe('DatabaseAboutService', () => {
  let service: DatabaseAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
