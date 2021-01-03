import { TestBed } from '@angular/core/testing';

import { SkillsReaderService } from './skills-reader.service';

describe('SkillsReaderService', () => {
  let service: SkillsReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
