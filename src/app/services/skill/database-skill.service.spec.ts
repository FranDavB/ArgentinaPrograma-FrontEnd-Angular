import { TestBed } from '@angular/core/testing';

import { DatabaseSkillService } from './database-skill.service';

describe('DatabaseSkillService', () => {
  let service: DatabaseSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
