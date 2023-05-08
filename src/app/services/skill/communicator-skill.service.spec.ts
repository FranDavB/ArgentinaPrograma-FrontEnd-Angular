import { TestBed } from '@angular/core/testing';

import { CommunicatorSkillService } from './communicator-skill.service';

describe('CommunicatorSkillService', () => {
  let service: CommunicatorSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
