import { TestBed } from '@angular/core/testing';

import { InfraBaseComponentsService } from './infra-base-components.service';

describe('InfraBaseComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfraBaseComponentsService = TestBed.get(InfraBaseComponentsService);
    expect(service).toBeTruthy();
  });
});
