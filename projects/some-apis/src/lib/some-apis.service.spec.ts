import { TestBed } from '@angular/core/testing';

import { SomeApisService } from './some-apis.service';

describe('SomeApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeApisService = TestBed.get(SomeApisService);
    expect(service).toBeTruthy();
  });
});
