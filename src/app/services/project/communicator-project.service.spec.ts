import { TestBed } from '@angular/core/testing';

import { CommunicatorProjectService } from './communicator-project.service';

describe('CommunicatorProjectService', () => {
  let service: CommunicatorProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
