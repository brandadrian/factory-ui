import { TestBed } from '@angular/core/testing';

import { FactoryUiLibService } from './factory-ui-lib.service';

describe('FactoryUiLibService', () => {
  let service: FactoryUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
