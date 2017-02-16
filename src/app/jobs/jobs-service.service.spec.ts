/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobsServiceService } from './jobs-service.service';

describe('JobsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobsServiceService]
    });
  });

  it('should ...', inject([JobsServiceService], (service: JobsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
