import { TestBed } from '@angular/core/testing';

import { NgCloneDeepService } from './ng-clone-deep.service';

describe('NgCloneDeepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCloneDeepService = TestBed.get(NgCloneDeepService);
    expect(service).toBeTruthy();
  });
});
