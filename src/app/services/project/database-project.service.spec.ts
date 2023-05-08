import { TestBed } from '@angular/core/testing';

import { DatabaseProjectService } from './database-project.service';

describe('DatabaseProjectService', () => {
  let service: DatabaseProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
