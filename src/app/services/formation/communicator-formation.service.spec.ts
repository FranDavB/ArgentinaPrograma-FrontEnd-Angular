import { TestBed } from '@angular/core/testing';

import { CommunicatorFormationService } from './communicator-formation.service';

describe('CommunicatorFormationService', () => {
  let service: CommunicatorFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
