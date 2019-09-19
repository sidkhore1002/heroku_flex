import { TestBed } from '@angular/core/testing';

import { Table2Service } from './table2.service';

describe('Table2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Table2Service = TestBed.get(Table2Service);
    expect(service).toBeTruthy();
  });
});
