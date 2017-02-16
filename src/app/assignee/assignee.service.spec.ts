/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssigneeService } from './assignee.service';

describe('AssigneeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssigneeService]
    });
  });

  it('should ...', inject([AssigneeService], (service: AssigneeService) => {
    expect(service).toBeTruthy();
  }));
});
