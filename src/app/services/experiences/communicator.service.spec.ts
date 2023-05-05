import { TestBed } from '@angular/core/testing';

import { CommunicatorService } from './communicator-experience.service';

describe('CommunicatorService', () => {
  let service: CommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
