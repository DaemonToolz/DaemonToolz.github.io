import { TestBed } from '@angular/core/testing';

import { StudiesReaderService } from './studies-reader.service';

describe('StudiesReaderService', () => {
  let service: StudiesReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiesReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
