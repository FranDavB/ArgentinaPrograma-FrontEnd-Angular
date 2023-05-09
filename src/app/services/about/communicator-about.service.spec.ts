import { TestBed } from '@angular/core/testing';

import { CommunicatorAboutService } from './communicator-about.service';

describe('CommunicatorAboutService', () => {
  let service: CommunicatorAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
