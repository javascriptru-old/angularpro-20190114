import { TestBed } from '@angular/core/testing';

import { MysuperlibService } from './mysuperlib.service';

describe('MysuperlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysuperlibService = TestBed.get(MysuperlibService);
    expect(service).toBeTruthy();
  });
});
