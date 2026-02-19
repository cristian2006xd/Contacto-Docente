import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { outhGuard } from './outh-guard';

describe('outhGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outhGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
