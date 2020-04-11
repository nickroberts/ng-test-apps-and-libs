import { TestBed } from '@angular/core/testing';

import { FpoContentService } from './fpo-content.service';

describe('FpoContentService', () => {
  let service: FpoContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpoContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
