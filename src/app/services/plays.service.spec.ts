import { TestBed } from '@angular/core/testing';

import { PlaysService } from './plays.service';

describe('PlaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaysService = TestBed.get(PlaysService);
    expect(service).toBeTruthy();
  });
});
